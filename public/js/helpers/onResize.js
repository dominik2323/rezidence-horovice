function onResize() {
  const labels = document.querySelectorAll("[data-label-to]");
  labels.forEach((label) => {
    const emittor = document.querySelector(
      `[data-name="${label.dataset.labelTo}"]`
    );
    const pos = emittor.getBoundingClientRect();
    const parentPos = emittor.parentElement.getBoundingClientRect();
    setStyleTo(label, {
      top: `${pos.y + pos.height / 2 - parentPos.y}px`,
      left: `${pos.x + pos.width / 2 - parentPos.x}px`,
      opacity: label.style.opacity,
    });
  });
}
