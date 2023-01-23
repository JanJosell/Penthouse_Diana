const contentContainer = document.getElementById("contentContainerBtn");
const infoBtn = document.getElementById("infoBtn");
const mapsBtn = document.getElementById("mapsBtn");
const contactBtn = document.getElementById("contactBtn");
const info = document.getElementById("info");
const maps = document.getElementById("maps");
const slideshow = document.getElementById("slideshow");
const pictures = document.getElementById("pictures");
const slogan = document.getElementById("slogan");

infoBtn.addEventListener("click", () => {
  maps.classList.remove("show");
  slogan.classList.remove("show");
  slideshow.classList.remove("show");
  info.classList.add("show");
});

mapsBtn.addEventListener("click", () => {
  info.classList.remove("show");
  slogan.classList.remove("show");
  slideshow.classList.remove("show");
  maps.classList.add("show");
});

pictures.addEventListener("click", () => {
  maps.classList.remove("show");
  slogan.classList.remove("show");
  info.classList.remove("show");
  slideshow.classList.add("show");
});
