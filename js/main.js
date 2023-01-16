const contentContainer = document.getElementById("contentContainerBtn");
const availabilityBtn = document.getElementById("availabilityBtn");
const mapsBtn = document.getElementById("mapsBtn");
const contactBtn = document.getElementById("contactBtn");
const calendar = document.getElementById("calendar");
const maps = document.getElementById("maps");
const slideshow = document.getElementById("slideshow");
const pictures = document.getElementById("pictures");
const slogan = document.getElementById("slogan");

availabilityBtn.addEventListener("click", () => {
  maps.classList.remove("show");
  slogan.classList.remove("show");
  slideshow.classList.remove("show");
  calendar.classList.add("show");
});

mapsBtn.addEventListener("click", () => {
  calendar.classList.remove("show");
  slogan.classList.remove("show");
  slideshow.classList.remove("show");
  maps.classList.add("show");
});

pictures.addEventListener("click", () => {
  maps.classList.remove("show");
  slogan.classList.remove("show");
  calendar.classList.remove("show");
  slideshow.classList.add("show");
});
