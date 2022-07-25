import getUrlParams from "../../helpers/getUrlParams.js";

function apartmentsOnClick(e, emittor) {
  const params = getUrlParams();
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.location = `https://www.residenceuskolky.cz/byty/${params.building}-${emittor.dataset.name}`;
  }
}

export default apartmentsOnClick;
