import floors from "../components/floors/index.js";
import aerial from "../components/aerial/index.js";
import getUrlParams from "../helpers/getUrlParams.js";

const params = getUrlParams();
const building = params.building || ``;
const buildingType = building.match(/^\w/i)[0];

const interactiveData = [
  {
    containerElement: document.querySelector(
      "[data-interactive-container-aerial]"
    ),
    backplateUrl: "/public/assets/aerial/aerial-bg.png",
    svgUrl: `public/assets/aerial/aerial.svg`,
    defaultHoverId: params.building,
    initial: aerial.aerialInitial,
    onClick: aerial.aerialOnClick,
    onHover: aerial.aerialOnHover,
  },
  {
    containerElement: document.querySelector(
      "[data-interactive-container-floors]"
    ),
    backplateUrl: `/public/assets/floors/${buildingType}.png`,
    svgUrl: `public/assets/floors/${buildingType}.svg`,
    defaultHoverId: null,
    initial: floors.floorInitial,
    onClick: floors.floorOnClick,
    onHover: floors.floorOnHover,
  },
];

window.interactiveData = interactiveData;
