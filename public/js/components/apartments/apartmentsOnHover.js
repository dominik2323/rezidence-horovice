import { SB_HOVER_CONTENT, SB_HOVER_HEADER } from "../../consts/selectors.js";

function apartmentsOnHover(hovering, e, emittor) {
  const id = emittor.id;
  const container = this.containerElement;
  const label = document.querySelector(`[data-label-to="${emittor.id}"]`);
  const sbHover = container.querySelector("[data-sb-anim]");
  const emittorData = data.apartment[id];
  const sbHoverHeader = container.querySelector(SB_HOVER_HEADER);
  const sbHoverContent = container.querySelector(SB_HOVER_CONTENT);

  sbHoverContent.innerHTML = `${emittorData.dispositions}\u2002-\u2002${emittorData.area}`;
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
