import aerial from "../components/aerial/index.js";

const aerialData = () => [
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

const aerialMarkup = `
<div class="hero aerial">
<div class="claim-wrapper">
  <h1 class="main-header">Vyberte si jeden z našich domů</h1>
</div>
<div class="interactive-el">
  <div
    class="interactive-el__inner"
    data-interactive-container
    data-interactive-container-aerial
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

window.aerialMarkup = aerialMarkup;
window.aerialData = aerialData;
