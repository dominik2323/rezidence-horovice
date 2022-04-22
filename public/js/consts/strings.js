const strings = {
  avaibleApartments: (number) => {
    if (number >= 5) return `volných bytů`;
    if (number === 1) return `volný byt`;
    if (number === 0) return `vyprodáno`;
    return "volné byty";
  },
  selectHouse: "vyberte myší dům",
  selectFloor: "vyberte myší patro",
  selectApartment: "vyberte myší byt",
};

export default strings;
