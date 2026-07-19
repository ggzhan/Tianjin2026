export type ProgramDay = {
  iso: string;
  label: string;
  tentative?: boolean;
};

export type ProgramRow = {
  time: string;
  cells: string[];
};

export type ProgramWeek = {
  title: string;
  days: ProgramDay[];
  rows: ProgramRow[];
};

/** Layout mirrors the camp program spreadsheet: days as columns, time blocks as rows. */
export const programWeeks: ProgramWeek[] = [
  {
    title: "Woche 1 · 22.–30. Juli",
    days: [
      { iso: "2026-07-22", label: "Mi 22.7." },
      { iso: "2026-07-23", label: "Do 23.7." },
      { iso: "2026-07-24", label: "Fr 24.7." },
      { iso: "2026-07-25", label: "Sa 25.7." },
      { iso: "2026-07-26", label: "So 26.7." },
      { iso: "2026-07-27", label: "Mo 27.7." },
      { iso: "2026-07-28", label: "Di 28.7." },
      { iso: "2026-07-29", label: "Mi 29.7." },
      { iso: "2026-07-30", label: "Do 30.7." },
    ],
    rows: [
      {
        time: "Frühstück 7:00",
        cells: ["", "", "", "Footing", "Footing", "Footing", "Footing", "Footing", "Footing"],
      },
      {
        time: "9:30–12:00",
        cells: [
          "Anreise: 11:20 Treffpunkt Zürich HB (grosse Uhr), Zug 11:34 Gleis 12",
          "Ankunft in Peking um 10:45",
          "Bus Peking → Tianjin\nHotel: 天津市南开区鞍山西道445号兴科大厦",
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
          "Ausflug Tianjin Stadtbesichtigung",
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
        ],
      },
      {
        time: "Mittagessen 12:30",
        cells: [
          "",
          "Reise ins Hotel\n住小叮三里屯太古里团结湖地铁站店",
          "Individuelles Trainingstagebuch",
          "Individuelles Trainingstagebuch",
          "Individuelles Trainingstagebuch",
          "",
          "",
          "Individuelles Trainingstagebuch",
          "Individuelles Trainingstagebuch",
        ],
      },
      {
        time: "14:00–17:00",
        cells: [
          "Abflug Zürich → Frankfurt: 14:35",
          "Ausflug Peking · Tiananmen-Platz",
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
          "Halber Tag Ausflug (Spa)",
          "",
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
        ],
      },
      {
        time: "17:00–17:30",
        cells: ["", "Gui Jie", "Teammeeting", "Freizeit", "Teammeeting", "", "Freizeit", "Freizeit", "Teammeeting"],
      },
      {
        time: "Abendessen 18:30",
        cells: ["Abflug Frankfurt → Peking: 19:20", "", "", "", "", "", "", "", ""],
      },
      {
        time: "19:00–20:30",
        cells: [
          "",
          "Freizeit",
          "Balleimertraining",
          "Freizeit",
          "Balleimertraining",
          "",
          "Balleimertraining",
          "Balleimertraining",
          "Freizeit",
        ],
      },
    ],
  },
  {
    title: "Woche 2 · 31. Juli–8. August",
    days: [
      { iso: "2026-07-31", label: "Fr 31.7." },
      { iso: "2026-08-01", label: "Sa 1.8." },
      { iso: "2026-08-02", label: "So 2.8." },
      { iso: "2026-08-03", label: "Mo 3.8." },
      { iso: "2026-08-04", label: "Di 4.8." },
      { iso: "2026-08-05", label: "Mi 5.8." },
      { iso: "2026-08-06", label: "Do 6.8.*", tentative: true },
      { iso: "2026-08-07", label: "Fr 7.8.*", tentative: true },
      { iso: "2026-08-08", label: "Sa 8.8." },
    ],
    rows: [
      {
        time: "Frühstück 7:00",
        cells: [
          "Footing",
          "Footing",
          "",
          "",
          "Footing",
          "",
          "Footing",
          "",
          "Ankunft Zürich Flughafen um 12:15",
        ],
      },
      {
        time: "9:30–12:00",
        cells: [
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
          "Ausdauertraining: 7:30–10:00",
          "Ausflug: ???\n(Joy City Shopping Mall)",
          "Tischtennis-Training mit Ma Wenge",
          "Evtl. Teilnahme an einem regionalen Tischtennisturnier",
          "Tischtennis-Training mit Ma Wenge",
          "Packen und Checkout",
          "",
        ],
      },
      {
        time: "",
        cells: ["", "", "Freizeit", "", "", "", "", "", ""],
      },
      {
        time: "Mittagessen 12:30",
        cells: [
          "Individuelles Trainingstagebuch",
          "Individuelles Trainingstagebuch",
          "",
          "",
          "Individuelles Trainingstagebuch",
          "",
          "Individuelles Trainingstagebuch",
          "Gemeinsames Mittagessen mit Louis und Jude",
          "",
        ],
      },
      {
        time: "14:00–17:00",
        cells: [
          "Tischtennis-Training mit Ma Wenge",
          "Tischtennis-Training mit Ma Wenge",
          "",
          "",
          "Tischtennis-Training mit Ma Wenge",
          "",
          "Tischtennis-Training mit Ma Wenge",
          "Reise nach Dalian",
          "",
        ],
      },
      {
        time: "17:00–17:30",
        cells: [
          "Teammeeting",
          "Freizeit",
          "",
          "",
          "Teammeeting",
          "Individuelles Trainingstagebuch",
          "Teammeeting",
          "",
          "",
        ],
      },
      {
        time: "Abendessen 18:30",
        cells: ["", "", "", "", "", "", "", "Metro zum Flughafen Dalian", ""],
      },
      {
        time: "18:30–20:30",
        cells: ["", "", "Gemeinsames Training im OTTV-Team", "", "", "", "", "", ""],
      },
      {
        time: "19:00–20:30",
        cells: [
          "Freizeit",
          "Balleimertraining",
          "",
          "Freizeit",
          "Freizeit",
          "Balleimertraining",
          "Freizeit",
          "Abflug um 22:10 von Flughafen Dalian",
          "",
        ],
      },
    ],
  },
];

export const phoneFreeNote =
  "Handyfreie Zeit: Zwischen dem Training am Morgen (9:30) und am Nachmittag (ca. 18:00) ist die Handynutzung beschränkt — nur Notfallkommunikation und Videostudium im Training. Ideal: Handy bleibt im Zimmer. Am Abend keine weiteren Einschränkungen.";
