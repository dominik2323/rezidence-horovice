import getUrlParams from "../../helpers/getUrlParams.js";

function floorOnClick(e, emittor) {
  const params = getUrlParams();
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.history.pushState(
      {},
      ``,
      `${window.location.origin}/?building=${params.building}&floor=${emittor.dataset.name}`
    );
    window.dispatchEvent(new Event("locationchange"));
  }
}

export default floorOnClick;
