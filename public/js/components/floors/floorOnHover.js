import {
  SB_HOVER_CONTENT,
  SB_HOVER_MAIN,
  DEFAULT_EMITTOR,
} from "../../consts/selectors.js";
import strings from "../../consts/strings.js";
import getUrlParams from "../../helpers/getUrlParams.js";

function floorOnHover(hovering, e, emittor) {
  const id = emittor.dataset.name;
  const params = getUrlParams();
  if (!Object.keys(data[params.building].floors).includes(id)) {
    return;
  }

  const container = this.containerElement;
  const label = document.querySelector(`[data-label-to="${id}"]`);
  const sbHover = container.querySelector("[data-sb-anim]");
  const avaibleApartments = data[params.building].floors[id].avaible;

  sbHover.querySelector(SB_HOVER_CONTENT).innerHTML =
    strings.avaibleApartments(avaibleApartments);
  sbHover.querySelector(SB_HOVER_MAIN).innerHTML = avaibleApartments;
  setStyleTo(sbHover.querySelector(SB_HOVER_MAIN), {
    display: avaibleApartments === 0 ? `none` : `inline-flex`,
  });

  if (this.defaultHoverId) {
    const defaultEmittor = container.querySelector(DEFAULT_EMITTOR);
    const defaultEmittorLabel = container.querySelector(
      `[data-label-to="${defaultEmittor.dataset.name}"]`
    );

    setStyleTo(defaultEmittor, {
      opacity: "0",
    });
    setStyleTo(defaultEmittorLabel, {
      opacity: "0",
    });
  }

  setStyleTo(label, {
    opacity: hovering ? `1` : `0`,
  });
  setStyleTo(emittor, {
    opacity: hovering ? `1` : `0`,
  });
  setStyleTo(sbHover, {
    transform: `translateY(${
      hovering && !this.defaultHoverId ? `-50%` : `0%`
    })`,
  });

  if (!hovering && this.defaultHoverId) {
    const defaultEmittor = container.querySelector(DEFAULT_EMITTOR);
    const defaultEmittorLabel = container.querySelector(
      `[data-label-to="${defaultEmittor.dataset.name}"]`
    );
    setStyleTo(defaultEmittor, {
      opacity: "1",
    });
    setStyleTo(defaultEmittorLabel, {
      opacity: "1",
    });
  }
}

export default floorOnHover;
