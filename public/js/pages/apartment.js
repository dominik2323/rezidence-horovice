import apartments from "../components/apartments/index.js";
import floors from "../components/floors/index.js";
import getUrlParams from "../helpers/getUrlParams.js";

const params = getUrlParams();
const building = params.building || ``;
const buildingType = building.match(/^\w/i);

const floor = params.floor || ``;

const interactiveData = [
  {
    containerElement: document.querySelector(
      "[data-interactive-container-apartment]"
    ),
    backplateUrl: `/public/assets/apartment/${buildingType}/backplate-${floor}.svg`,
    defaultHoverId: null,
    svgUrl: `public/assets/apartment/${buildingType}/${floor}.svg`,
    initial: apartments.apartmentsInitial,
    onHover: apartments.apartmentsOnHover,
    onClick: apartments.apartmentsOnClick,
  },
  {
    containerElement: document.querySelector(
      "[data-interactive-container-floors]"
    ),
    backplateUrl: `/public/assets/floors/${buildingType}.png`,
    svgUrl: `public/assets/floors/${buildingType}.svg`,
    defaultHoverId: params.floor,
    initial: floors.floorInitial,
    onHover: floors.floorOnHover,
    onClick: floors.floorOnClick,
  },
];

window.interactiveData = interactiveData;
