interface Data {
  containerElement: HTMLElement;
  backplateUrl: string;
  svgUrl: string;
  onClick: (e: MouseEvent, emittor: SVGGElement) => void;
  onHover: (hovering: boolean, e: MouseEvent, emittor: SVGGElement) => void;
  initial: (emittor: SVGGElement) => void;
}

async function initInteractive(data: Data) {
  const img = createBackplate(data.backplateUrl);
  const svg = await createSvg(data.svgUrl);

  data.containerElement.append(svg, img);
  svg.querySelectorAll("g").forEach(createEmittors);

  function createEmittors(emittor: SVGGElement) {
    data.initial(emittor);
    emittor.addEventListener("click", (e) => data.onClick(e, emittor));
    emittor.addEventListener("mouseenter", (e) =>
      delay(() => data.onHover(true, e, emittor))
    );
    emittor.addEventListener("mouseleave", (e) =>
      delay(() => data.onHover(false, e, emittor))
    );
  }

  setStyleTo(data.containerElement, {
    paddingBottom: `${(svg.clientHeight / svg.clientWidth) * 100}%`,
  });
}

function delay(cb: () => void) {
  setTimeout(cb, 150);
}

function createBackplate(src: string) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  return img;
}

async function createSvg(url: string) {
  // const apiUrl = window.location.origin + "/" + url;
  const res = await fetch(url);
  const svgString = await res.text();
  const parser = new DOMParser();
  const svgElement = parser.parseFromString(svgString, "text/html");

  return svgElement.querySelector("svg")!;
}

interface Window {
  initInteractive: typeof initInteractive;
  setStyle: typeof setStyleTo;
}

function setStyleTo(
  el: HTMLElement | SVGGElement,
  style: Partial<CSSStyleDeclaration>
) {
  Object.assign(el.style, style);
}

window.setStyleTo = setStyleTo;
window.initInteractive = initInteractive;
