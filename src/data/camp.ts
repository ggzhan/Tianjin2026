export const hall = {
  name: "Trainingshalle",
  en: "Nr. 379, Anshan West-Strasse, Xingye Digital Building, 3. Stock, Tianjin",
  zh: "鞍山西道379号兴业数码三楼",
  pinyin: "Anshan Xidao 379 hao, Xingye Shuma san lou",
  note: "In einem Geschäftsgebäude, zentral neben Nankai University und Tianjin University. Profi-Boden, 20 feste Tische. Hotel ca. 10 Min. zu Fuss.",
};

export const hotel = {
  name: "All Seasons Hotel",
  en: "Xingke Building, No. 445 Anshan West Road, Nankai District, Tianjin",
  zh: "全季酒店, 天津市南开区鞍山西道445号兴科大厦",
  note: "Waschmaschinen gratis nutzbar.",
};

export const contacts: { name: string; phone?: string; wechat?: string }[] = [
  {
    name: "Julian Busslinger",
    phone: "+41 79 832 23 88",
    wechat: "wxid_5jmbbzrddmy12",
  },
  {
    name: "Gerald Zhang",
    phone: "+41 78 704 41 88",
    wechat: "gerald-zhang",
  },
  {
    name: "Louis",
    wechat: "louissunxiao",
  },
  {
    name: "Jude",
    wechat: "CX35771125",
  },
  {
    name: "Schweizer Konsulat Peking",
    phone: "+86 10 6532 2736",
  },
  {
    name: "Schweizer Konsulat Shanghai",
    phone: "+86 21 6270 0519 / +86 21 6270 0520",
  },
];
export const packingList = [
  "Pass — mindestens sechs Monate über dem Abreisedatum hinaus gültig. Immer dabei beim Reisen.",
  "Chinesisches Bargeld für Notfälle. WeChat Pay oder Alipay vorab installieren.",
  "Erkältungsmedikamente und Mittel gegen Magenbeschwerden.",
  "Sommerkleider fürs schwüle Klima (Waschmaschine im Hotel).",
  "Turn- und Tischtenniszeug.",
  "Badesachen (Hallenbad und Strände in Tianjin).",
  "Steckdosenadapter (chinesische Steckdosen).",
  "Nastüchlein-Päckchen (oft kein WC-Papier in öffentlichen WCs).",
  "Chinesische Apps vor der Abreise installieren (ohne VPN/eSIM in China schwierig).",
];

export const tips = [
  "Hahnenwasser nicht trinken — Wasserkocher und Spender sind überall.",
  "Toilettenpapier oft in den Mülleimer neben der Toilette, nicht spülen.",
  "Hocktoiletten sind üblich; in der Stadt oft beides vorhanden.",
  "Chinesische Touristen fragen oft nach Fotos — besonders bei blonden / blauäugigen Personen.",
];

export type Phrase = { de: string; zh: string; py: string };

export const phrases: Phrase[] = [
  { de: "Hallo", zh: "你好", py: "nǐ hǎo" },
  { de: "Danke", zh: "谢谢", py: "xiè xie" },
  { de: "Bitte (höflich)", zh: "请", py: "qǐng" },
  { de: "Entschuldigung", zh: "对不起", py: "duì bu qǐ" },
  { de: "Kein Problem", zh: "没关系", py: "méi guān xi" },
  { de: "Ja", zh: "是", py: "shì" },
  { de: "Nein", zh: "不是", py: "bú shì" },
  { de: "Wie heisst du?", zh: "你叫什么名字？", py: "nǐ jiào shén me míng zi?" },
  { de: "Ich heisse…", zh: "我叫…", py: "wǒ jiào…" },
  { de: "Sprechen Sie Englisch?", zh: "你会说英语吗？", py: "nǐ huì shuō yīng yǔ ma?" },
  { de: "Ich verstehe nicht", zh: "我听不懂", py: "wǒ tīng bù dǒng" },
  { de: "Wie viel kostet das?", zh: "这个多少钱？", py: "zhè ge duō shǎo qián?" },
  { de: "Zu teuer!", zh: "太贵了", py: "tài guì le" },
  { de: "Können Sie das billiger machen?", zh: "可以便宜一点吗？", py: "kě yǐ pián yi yì diǎn ma?" },
  { de: "Wo ist die Toilette?", zh: "洗手间在哪里？", py: "xǐ shǒu jiān zài nǎ lǐ?" },
  { de: "Hilfe!", zh: "救命！", py: "jiù mìng!" },
  { de: "Wasser", zh: "水", py: "shuǐ" },
  { de: "Die Rechnung, bitte", zh: "请给我账单", py: "qǐng gěi wǒ zhàng dān" },
  { de: "Tschüss", zh: "再见", py: "zài jiàn" },
  {
    de: "Ich möchte zu dieser Adresse (Hotel)",
    zh: "我想去这个地址：天津市南开区鞍山西道445号兴科大厦",
    py: "Wǒ xiǎng qù zhège dìzhǐ: Tiānjīn shì nánkāi qū ānshān xī dào 445 hào xìng kē dàshà",
  },
  { de: "Ich bin allergisch auf …", zh: "我对……过敏", py: "wǒ duì …… guò mǐn" },
  { de: "Ich esse … nicht", zh: "我不吃...", py: "Wǒ bù chī…" },
  { de: "Vegetarisch", zh: "素食", py: "sù shí" },
];

export const ttTerms: Phrase[] = [
  { de: "Tischtennis", zh: "乒乓球", py: "pīng pāng qiú" },
  { de: "Schläger", zh: "球拍", py: "qiú pāi" },
  { de: "Ball", zh: "球", py: "qiú" },
  { de: "Aufschlag", zh: "发球", py: "fā qiú" },
  { de: "Vorhand", zh: "正手", py: "zhèng shǒu" },
  { de: "Rückhand", zh: "反手", py: "fǎn shǒu" },
  { de: "Topspin", zh: "上旋球", py: "shàng xuán qiú" },
  { de: "Unterschnitt", zh: "下旋球", py: "xià xuán qiú" },
  { de: "Schmetterball", zh: "扣杀", py: "kòu shā" },
  { de: "Gut gespielt!", zh: "好球！", py: "hǎo qiú!" },
  { de: "Noch einmal!", zh: "再来一次！", py: "zài lái yí cì!" },
  { de: "Trainer", zh: "教练", py: "jiào liàn" },
  { de: "Training", zh: "训练", py: "xùn liàn" },
  { de: "Balleimertraining", zh: "多球训练", py: "duō qiú xùn liàn" },
  { de: "Lass uns ein Match spielen", zh: "我们打一场吧", py: "wǒ men dǎ yì chǎng ba" },
];

export const appRows = [
  { blocked: "WhatsApp / Facebook / Twint", cn: "WeChat", req: "Pflicht" },
  { blocked: "Google Maps", cn: "Baidu Maps oder Amap", req: "Pflicht" },
  { blocked: "Twint / PayPal", cn: "WeChat Pay oder Alipay", req: "Pflicht" },
  { blocked: "Google Translate", cn: "Baidu Translate", req: "Optional (Offline-Google vorbereiten)" },
  { blocked: "Uber Eats", cn: "Meituan", req: "Optional" },
  { blocked: "Uber", cn: "DiDi", req: "Optional" },
  { blocked: "Google Suche", cn: "baidu.cn", req: "Optional" },
  { blocked: "YouTube", cn: "Youku", req: "Optional" },
  { blocked: "Instagram", cn: "Xiaohongshu", req: "Optional" },
  { blocked: "Tripadvisor", cn: "Trip.com", req: "Optional" },
];
