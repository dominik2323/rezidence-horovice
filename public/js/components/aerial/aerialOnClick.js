function aerialOnClick(e, emittor) {
  if (!emittor.hasAttribute("data-emittor-inactive")) {
    window.history.pushState(
      {},
      ``,
      `${window.location.origin}/?building=${emittor.dataset.name}`
    );
    window.dispatchEvent(new Event("locationchange"));
  }
}

export default aerialOnClick;
