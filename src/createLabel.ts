// @ts-nocheck

const createLabel = (content, referenceEl, parentEl) => {
  const label = document.createElement("div");
  label.append(content);

  label.style.position = "absolute";
  const getRelX = (val) => (100 / parentEl.clientWidth) * val;
  const getRelY = (val) => (100 / parentEl.clientHeight) * val;
  const emitorBB = referenceEl.getBoundingClientRect();
  Object.assign(label.style, {
    top: `${
      getRelY(emitorBB.top - parentEl.getBoundingClientRect().top) +
      getRelY(emitorBB.height) / 2
    }%`,
    left: `${
      getRelX(emitorBB.left - parentEl.getBoundingClientRect().left) +
      getRelX(emitorBB.width) / 2
    }%`,
    width: `${emitorBB.width}px`,
    height: `${emitorBB.height}px`,
    transform: `translate(-50%, -50%)`,
    pointerEvents: `none`,
  });

  return label;
};

export default createLabel;
