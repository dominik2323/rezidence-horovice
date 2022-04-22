import aerial from "../components/aerial/index.js";

const interactiveData = [
  {
    containerElement: document.querySelector(
      "[data-interactive-container-aerial]"
    ),
    backplateUrl: "/public/assets/aerial/aerial-bg.png",
    svgUrl: `public/assets/aerial/aerial.svg`,
    defaultHoverId: null,
    initial: aerial.aerialInitial,
    onHover: aerial.aerialOnHover,
    onClick: aerial.aerialOnClick,
  },
];

window.interactiveData = interactiveData;
