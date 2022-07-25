import {
  SB_HOVER_CONTENT,
  SB_HOVER_MAIN,
  SB_ANIM,
  DEFAULT_EMITTOR,
} from "../../consts/selectors.js";
import strings from "../../consts/strings.js";

function aerialOnHover(hovering, e, emittor) {
  const id = emittor.dataset.name;
  if (!Object.keys(data).includes(id)) {
    return;
  }
  const { displayName, avaible } = data[id];
  const container = this.containerElement;
  const sbNumber = container.querySelector(SB_HOVER_MAIN);
  const sbContent = container.querySelector(SB_HOVER_CONTENT);
  const defaultEmittor = container.querySelector(DEFAULT_EMITTOR);

  sbNumber.innerHTML = avaible;
  sbContent.innerHTML = strings.avaibleApartments(avaible);
  setStyleTo(sbNumber, {
    display: avaible === 0 ? `none` : `inline-flex`,
  });

  setStyleTo(emittor, {
    opacity: hovering ? `1` : `0`,
  });

  if (!this.defaultHoverId) {
    const sbAnim = container.querySelector(SB_ANIM);
    setStyleTo(sbAnim, {
      transform: `translateY(${hovering ? `-50%` : `0%`})`,
    });
  }

  if (this.defaultHoverId) {
    setStyleTo(defaultEmittor, {
      opacity: "0",
    });
  }

  if (!hovering && this.defaultHoverId) {
    const defaultEmittorData = data[this.defaultHoverId];

    setStyleTo(defaultEmittor, {
      opacity: "1",
    });

    setStyleTo(sbNumber, {
      display: `inline-flex`,
    });

    sbNumber.innerHTML = defaultEmittorData.avaible;
    sbContent.innerHTML = strings.avaibleApartments(defaultEmittorData);
  }
}

export default aerialOnHover;
