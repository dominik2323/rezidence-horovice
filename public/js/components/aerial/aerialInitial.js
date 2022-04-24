import {
  SB_HOVER_CONTENT,
  SB_HOVER_MAIN,
  SB_DEFAULT_CONTENT,
} from "../../consts/selectors.js";
import strings from "../../consts/strings.js";

function aerialInitial(emittor) {
  const id = emittor.dataset.name;
  const { avaible, displayName } = data.aerial[id];
  const label = document.createElement("div");
  const polygon = emittor.querySelector("polygon");
  const pos = polygon.getBoundingClientRect();
  const container = this.containerElement;
  const parentPos = emittor.parentElement.getBoundingClientRect();
  const isDefaultEmittor = this.defaultHoverId === id;

  if (!this.defaultHoverId) {
    container.querySelector(SB_DEFAULT_CONTENT).innerHTML = strings.selectHouse;
  }

  label.classList.add("obj-label", "default");
  label.setAttribute("data-label-to", id);
  label.innerText = displayName;
  setStyleTo(label, {
    top: `${pos.y + pos.height / 2 - parentPos.y}px`,
    left: `${pos.x + pos.width / 2 - parentPos.x}px`,
  });
  container.append(label);

  if (avaible === 0) {
    emittor.setAttribute("data-emittor-inactive", "");
  }

  setStyleTo(emittor, {
    opacity: `0`,
  });

  if (isDefaultEmittor) {
    emittor.setAttribute("data-default-emittor", "");
    container.querySelector(SB_HOVER_MAIN).innerHTML = avaible;
    container.querySelector(SB_HOVER_CONTENT).innerHTML =
      strings.avaibleApartments(avaible);
    setStyleTo(emittor, { opacity: 1 });
  }
}

export default aerialInitial;
