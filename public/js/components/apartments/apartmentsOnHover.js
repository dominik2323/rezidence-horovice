import { SB_HOVER_CONTENT, SB_HOVER_MAIN } from "../../consts/selectors.js";
import strings from "../../consts/strings.js";
import getUrlParams from "../../helpers/getUrlParams.js";

function apartmentsOnHover(hovering, e, emittor) {
  const id = emittor.dataset.name;
  const params = getUrlParams();

  if (
    !Object.keys(
      data[params.building].floors[params.floor].apartments
    ).includes(id)
  ) {
    return;
  }
  const container = this.containerElement;
  const label = document.querySelector(`[data-label-to="${id}"]`);
  const sbHover = container.querySelector("[data-sb-anim]");
  const emittorData = data[params.building].floors[params.floor].apartments[id];
  const sbHoverHeader = container.querySelector(SB_HOVER_MAIN);
  const sbHoverContent = container.querySelector(SB_HOVER_CONTENT);
  const unavaibleString = `vyprodáno\u2002-\u2002`;

  const isUnavaible = !emittorData.avaible;

  sbHoverHeader.classList.remove("inactive");
  if (isUnavaible) {
    sbHoverHeader.classList.add("inactive");
  }
  sbHoverContent.innerHTML = `${isUnavaible ? unavaibleString : ``}${
    emittorData.dispositions
  }\u2002-\u2002${emittorData.area}`;
  sbHoverHeader.innerHTML = emittorData.displayName;

  setStyleTo(label, {
    opacity: hovering ? `1` : `0`,
  });
  setStyleTo(emittor, {
    opacity: hovering ? `1` : `0`,
  });
  setStyleTo(sbHover, {
    transform: `translateY(${hovering ? `-50%` : `0%`})`,
  });
}

export default apartmentsOnHover;
