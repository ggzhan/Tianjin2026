export type ArrivalField = {
  label: string;
  value: string;
};

export const arrivalCardCommon: ArrivalField[] = [
  {
    label: "Do you hold a valid visa or other entry permit?",
    value: "No — ausser ihr musstet vorher ein Visum beantragen",
  },
  { label: "Entry Policy Selection", value: "Visa-free Entry" },
  { label: "Arrival Flight", value: "CA958" },
  { label: "City of Entry", value: "Beijing" },
  { label: "Port of Entry", value: "Beijing Daxing Airport" },
  { label: "Purpose of Entry", value: "Sightseeing/Leisure" },
  { label: "Date of Entry", value: "23.07.2026" },
  { label: "Destination Cities in China", value: "Tianjin" },
  {
    label: "Address in China",
    value: "All Seasons Hotel, Xingke Building, No. 445 Anshan West Road, Nankai District, Tianjin",
  },
  { label: "Confirmed Departure Itinerary", value: "Yes" },
  { label: "Date of Departure", value: "08.08.2026" },
  { label: "Departure Flight", value: "CA 841" },
  { label: "City of Departure", value: "Beijing" },
  { label: "Port of Departure", value: "Beijing Capital International Airport" },
];

export const arrivalCardInviter = {
  question: "Do you have any inviting entities or inviters in China?",
  withoutVisa: "No",
  withVisaNote: "Nur für Personen mit Visum — dort «Yes» wählen und die Angaben unten eintragen.",
  entity: [
    { label: "Entity Name", value: "Shenyang Louis Sports Development Co., Ltd." },
    { label: "Entity Contact Information", value: "+8615524142860" },
  ] as ArrivalField[],
};
