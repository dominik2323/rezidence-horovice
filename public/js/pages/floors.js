import floors from "../components/floors/index.js";
import aerial from "../components/aerial/index.js";
import getUrlParams from "../helpers/getUrlParams.js";

const floorsMarkup = `
<div class="hero floors">
<div class="hero-left">
  <div class="interactive-el">
    <div
      class="interactive-el__inner"
      data-interactive-container
      data-interactive-container-aerial
    >
      <div class="sb">
        <div class="sb__anim" data-sb-anim>
          <div class="sb__anim__inner">
            <div data-sb-hover>
              <span class="main" data-sb-hover-main></span>
              <span class="content" data-sb-hover-content></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="claim-wrapper">
    <span class="back" data-back-button="/">
      <img src="public/assets/arrow-back.svg" alt="" />
      <span>Výběr domu</span>
    </span>
    <h1 class="main-header">Vyberte si<br />podlaží</h1>
  </div>
</div>
<div class="interactive-el">
  <div
    class="interactive-el__inner"
    data-interactive-container
    data-interactive-container-floors
  >
    <div class="sb">
      <div class="sb__anim" data-sb-anim>
        <div class="sb__anim__inner">
          <img src="public/assets/hover-icon.svg" alt="" />
          <span data-sb-default-content></span>
        </div>
        <div class="sb__anim__inner">
          <div data-sb-hover>
            <span class="main" data-sb-hover-main></span>
            <span class="content" data-sb-hover-content></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

const floorsData = () => {
  const params = getUrlParams();
  const building = params.building || ``;
  const buildingType = building.match(/^\w/i)[0];

  return [
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
};

window.floorsMarkup = floorsMarkup;
window.floorsData = floorsData;
