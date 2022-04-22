function aerialOnClick(e, emittor) {
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.location = `${window.location.origin}/floors.html?building=${emittor.id}`;
  }
}

export default aerialOnClick;
