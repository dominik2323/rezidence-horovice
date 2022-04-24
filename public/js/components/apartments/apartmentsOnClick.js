import getUrlParams from "../../helpers/getUrlParams.js";

const params = getUrlParams();

function apartmentsOnClick(e, emittor) {
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    console.log({
      buildingId: params.building,
      floorId: params.floor,
      apartmentId: emittor.dataset.name,
    });
  }
}

export default apartmentsOnClick;
