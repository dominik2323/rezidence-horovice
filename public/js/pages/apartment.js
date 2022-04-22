import apartments from "../components/apartments/index.js";
import floors from "../components/floors/index.js";
import getUrlParams from "../helpers/getUrlParams.js";

const params = getUrlParams();

const interactiveData = [
  {
    containerElement: document.querySelector(
      "[data-interactive-container-apartment]"
    ),
    backplateUrl: `/public/assets/apartment/b/1pp-backplate.svg`,
    defaultHoverId: null,
    svgUrl: `public/assets/apartment/b/1pp.svg`,
    initial: apartments.apartmentsInitial,
    onHover: apartments.apartmentsOnHover,
    onClick: apartments.apartmentsOnClick,
  },
  {
    containerElement: document.querySelector(
      "[data-interactive-container-floors]"
    ),
    backplateUrl: "/public/assets/floors/floors.png",
    svgUrl: `public/assets/floors/floors.svg`,
    defaultHoverId: params.floor,
    initial: floors.floorInitial,
    onHover: floors.floorOnHover,
    onClick: floors.floorOnClick,
  },
];

window.interactiveData = interactiveData;
