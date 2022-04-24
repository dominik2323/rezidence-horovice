import { SB_DEFAULT_CONTENT } from "../../consts/selectors.js";
import strings from "../../consts/strings.js";

function apartmentsInitial(emittor) {
  const container = this.containerElement;
  const sbDefaultContent = container.querySelector(SB_DEFAULT_CONTENT);
  const objLabel = document.createElement("div");
  const pos = emittor.getBoundingClientRect();
  const parentPos = emittor.parentElement.getBoundingClientRect();
  const { avaible, displayName } = data.apartment[emittor.dataset.name];

  sbDefaultContent.innerHTML = strings.selectApartment;

  objLabel.classList.add(`obj-label`, `floors`);
  objLabel.innerText = displayName;
  objLabel.setAttribute("data-label-to", emittor.dataset.name);
  setStyleTo(objLabel, {
    top: `${pos.y + pos.height / 2 - parentPos.y}px`,
    left: `${pos.x + pos.width / 2 - parentPos.x}px`,
    opacity: 0,
  });
  container.append(objLabel);

  if (!avaible) {
    emittor.setAttribute("data-emittor-inactive", "");
  }

  setStyleTo(emittor, {
    opacity: `0`,
  });
}

export default apartmentsInitial;
