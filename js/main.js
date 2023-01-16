const contentContainer = document.getElementById("contentContainerBtn");
const availabilityBtn = document.getElementById("availabilityBtn");
const mapsBtn = document.getElementById("mapsBtn");
const contactBtn = document.getElementById("contactBtn");
const calendar = document.getElementById("calendar");
const maps = document.getElementById("maps");
const slideshow = document.getElementById("slideshow");
const pictures = document.getElementById("pictures");

availabilityBtn.addEventListener("click", () => {
  maps.style.display = "none";
  slideshow.style.display = "none";
  calendar.style.display = "block";
  console.log("bort");
});

mapsBtn.addEventListener("click", () => {
  calendar.style.display = "none";
  slideshow.style.display = "none";
  maps.style.display = "block";
  console.log("bort");
});

pictures.addEventListener("click", () => {
  calendar.style.display = "none";
  maps.style.display = "none";
  slideshow.style.display = "block";
  console.log("bort");
});
