import apartments from "../components/apartments/index.js";
import floors from "../components/floors/index.js";
import getUrlParams from "../helpers/getUrlParams.js";
import { assetUrl } from "../helpers/consts.js";

const apartmentMarkup = `
<div class="hero apartments">
<div class="hero-left">
  <div class="interactive-el">
    <div
      class="interactive-el__inner"
      data-interactive-container
      data-interactive-container-floors
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
    <span class="back" data-back-button="/floors.html">
      <img src="${assetUrl}/public/assets/arrow-back.svg" alt="" />
      <span>Výběr patra</span>
    </span>
    <h1 class="main-header">Vyberte si<br />byt na patře</h1>
  </div>
</div>

<div class="interactive-el">
  <div
    class="interactive-el__inner"
    data-interactive-container
    data-interactive-container-apartment
  >
    <div class="sb">
      <div class="sb__anim" data-sb-anim>
        <div class="sb__anim__inner">
          <img src="${assetUrl}/public/assets/hover-icon.svg" alt="" />
          <span data-sb-default-content></span>
        </div>
        <div class="sb__anim__inner">
          <div data-sb-hover>
            <span class="main header" data-sb-hover-main></span>
            <span class="content" data-sb-hover-content></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

const apartmentData = () => {
  const params = getUrlParams();
  const building = params.building || ``;
  const buildingType = building.match(/^\w/i);

  const floor = params.floor || ``;
  return [
    {
      containerElement: document.querySelector(
        "[data-interactive-container-apartment]"
      ),
      backplateUrl: `${assetUrl}/public/assets/apartment/${buildingType}/backplate-${floor}.svg`,
      defaultHoverId: null,
      svgUrl: `${assetUrl}/public/assets/apartment/${buildingType}/${floor}.svg`,
      initial: apartments.apartmentsInitial,
      onHover: apartments.apartmentsOnHover,
      onClick: apartments.apartmentsOnClick,
    },
    {
      containerElement: document.querySelector(
        "[data-interactive-container-floors]"
      ),
      backplateUrl: `${assetUrl}/public/assets/floors/${buildingType}.png`,
      svgUrl: `${assetUrl}/public/assets/floors/${buildingType}.svg`,
      defaultHoverId: params.floor,
      initial: floors.floorInitial,
      onHover: floors.floorOnHover,
      onClick: floors.floorOnClick,
    },
  ];
};

window.apartmentMarkup = apartmentMarkup;
window.apartmentData = apartmentData;
