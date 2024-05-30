import Splide from "@splidejs/splide";

let brothSlider = new Splide(".broth-slider", {
  perPage: 1,
  gap: "0",
  omitEnd: true,
  focus: "center",
  drag: "free",
  snap: true,
  arrows: false,
  classes: {
    pagination: "splide__pagination carousel-dot-container",
    page: "splide__pagination__page carousel-dot",
  },
});

brothSlider.mount();


let meatSlider = new Splide(".meat-slider", {
  perPage: 1,
  gap: "0",
  omitEnd: true,
  focus: "center",
  drag: "free",
  snap: true,
  arrows: false,
  classes: {
    pagination: "splide__pagination carousel-dot-container",
    page: "splide__pagination__page carousel-dot",
  },
});

meatSlider.mount();
