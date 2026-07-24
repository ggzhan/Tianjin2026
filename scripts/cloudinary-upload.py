#!/usr/bin/env python3
"""Upload files to Cloudinary using signed credentials from sign-upload MCP."""
import json
import sys
from pathlib import Path

try:
    import requests
except ImportError:
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "-q"])
    import requests


def serialize(v):
    # Cloudinary signatures use lowercase true/false strings for booleans.
    if isinstance(v, bool):
        return "true" if v else "false"
    return str(v)


def upload_one(cred: dict, file_path: Path, resource_type: str = "image") -> dict:
    url = f"https://{cred['host']}/v1_1/{cred['cloud_name']}/{resource_type}/upload"
    data = {
        "api_key": cred["api_key"],
        "signature": cred["signature"],
        **{k: serialize(v) for k, v in cred["upload_params"].items()},
    }
    with file_path.open("rb") as f:
        files = {"file": (file_path.name, f)}
        r = requests.post(url, data=data, files=files, timeout=600)
    if not r.ok:
        raise RuntimeError(f"{file_path.name}: {r.status_code} {r.text[:500]}")
    return r.json()


def main():
    # Args: creds.json filelist.txt resource_type
    # filelist lines: local_path<TAB>public_id basename for results key
    creds_path = Path(sys.argv[1])
    files_path = Path(sys.argv[2])
    resource_type = sys.argv[3] if len(sys.argv) > 3 else "image"
    creds = json.loads(creds_path.read_text())
    files = [line.strip().split("\t") for line in files_path.read_text().splitlines() if line.strip()]
    if len(files) != len(creds):
        raise SystemExit(f"files ({len(files)}) != creds ({len(creds)})")

    results = {}
    for (file_path, key), cred in zip(files, creds):
        path = Path(file_path)
        print(f"Uploading {path.name} ({resource_type})...", flush=True)
        resp = upload_one(cred, path, resource_type)
        results[key] = {
            "public_id": resp.get("public_id"),
            "secure_url": resp.get("secure_url"),
            "resource_type": resp.get("resource_type", resource_type),
        }
        print(f"  -> {resp.get('secure_url')}", flush=True)

    out = creds_path.with_suffix(".results.json")
    out.write_text(json.dumps(results, indent=2))
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
