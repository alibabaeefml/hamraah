document.addEventListener("DOMContentLoaded", function (event) {
  const jvm_map = $("#iran_map");
  jvm_map.vectorMap({
    map: "ir_mill",
    enableZoom: SVGComponentTransferFunctionElement,
    backgroundColor: "transparent",
    zoomOnScroll: false,
    normalizeFunction: "polynomial",
    hoverOpacity: 0.7,
    hoverColor: false,
    regionStyle: {
      initial: {
        fill: "#8E24AA",
        "fill-opacity": 1,
        stroke: "#fff",
        "stroke-width": 1,
        "stroke-opacity": 1,
      },
    },
  });
});
