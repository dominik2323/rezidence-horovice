import getUrlParams from "../../helpers/getUrlParams.js";

const params = getUrlParams();

function apartmentsOnClick(e, emittor) {
  // /byty/a1-24/
  console.log(emittor);
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.location = `https://www.residenceuskolky.cz/byty/${params.building}-${emittor.dataset.name}`;
  }
}

export default apartmentsOnClick;
