import {
  SB_HOVER_CONTENT,
  SB_HOVER_NUMBER,
  SB_ANIM,
  DEFAULT_EMITTOR,
} from "../../consts/selectors.js";
import strings from "../../consts/strings.js";

function aerialOnHover(hovering, e, emittor) {
  const id = emittor.id;
  const { displayName, avaible } = data.aerial[id];
  const container = this.containerElement;
  const sbNumber = container.querySelector(SB_HOVER_NUMBER);
  const sbContent = container.querySelector(SB_HOVER_CONTENT);

  sbNumber.innerHTML = avaible;
  sbContent.innerHTML = strings.avaibleApartments(avaible);

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
    const defaultEmittor = container.querySelector(DEFAULT_EMITTOR);
    setStyleTo(defaultEmittor, {
      opacity: "0",
    });
  }

  if (!hovering && this.defaultHoverId) {
    const defaultEmittorData = data.aerial[this.defaultHoverId];

    setStyleTo(defaultEmittor, {
      opacity: "1",
    });
    sbNumber.innerHTML = defaultEmittorData.avaible;
    sbContent.innerHTML = strings.avaibleApartments(defaultEmittorData);
  }
}

export default aerialOnHover;
