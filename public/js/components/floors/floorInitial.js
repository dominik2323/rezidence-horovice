import {
  SB_DEFAULT_CONTENT,
  SB_HOVER_MAIN,
  SB_HOVER_CONTENT,
} from "../../consts/selectors.js";
import strings from "../../consts/strings.js";

function floorInitial(emittor) {
  const id = emittor.dataset.name;
  console.log(id, data);
  const container = this.containerElement;
  const sbDefaultContent = container.querySelector(SB_DEFAULT_CONTENT);
  const objLabel = document.createElement("div");
  const pos = emittor.getBoundingClientRect();
  const parentPos = emittor.parentElement.getBoundingClientRect();
  const { avaible, displayName } = data.floors[id];
  const isDefaultEmittor = this.defaultHoverId === id;

  if (!this.defaultHoverId) {
    sbDefaultContent.innerHTML = strings.selectFloor;
  }

  objLabel.classList.add(`obj-label`, `floors`);
  objLabel.innerText = displayName;
  objLabel.setAttribute("data-label-to", id);
  setStyleTo(objLabel, {
    top: `${pos.y + pos.height / 2 - parentPos.y}px`,
    left: `${pos.x + pos.width / 2 - parentPos.x}px`,
    opacity: 0,
  });
  container.append(objLabel);

  if (avaible === 0) {
    emittor.setAttribute("data-emittor-inactive", "");
  }

  setStyleTo(emittor, {
    opacity: `0`,
  });

  if (isDefaultEmittor && this.defaultHoverId) {
    emittor.setAttribute("data-default-emittor", "");
    setStyleTo(objLabel, {
      opacity: `1`,
    });
    container.querySelector(SB_HOVER_MAIN).innerHTML = avaible;
    container.querySelector(SB_HOVER_CONTENT).innerHTML =
      strings.avaibleApartments(avaible);
    setStyleTo(emittor, { opacity: 1 });
  }
}

export default floorInitial;
