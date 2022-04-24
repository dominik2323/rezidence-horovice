function aerialOnClick(e, emittor) {
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.location = `${window.location.origin}/floors.html?building=${emittor.dataset.name}`;
  }
}

export default aerialOnClick;
