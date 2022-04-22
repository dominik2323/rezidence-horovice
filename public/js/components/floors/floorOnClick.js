import getUrlParams from "../../helpers/getUrlParams.js";

const params = getUrlParams();

function floorOnClick(e, emittor) {
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.location = `${window.location.origin}/apartment.html?building=${params.building}&floor=${emittor.id}`;
  }
}

export default floorOnClick;
