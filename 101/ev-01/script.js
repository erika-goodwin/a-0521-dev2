const button = document.querySelector("#changecolor");
const container = document.querySelector("#container");

//===================(2)Click the circle 2 (sample)==========================
// button.onclick = function () {
//   container.style.backgroundColor = "red";
// };

// container.onclick = function () {
//   // container.classList.toggle("hide");
//   container.style.display = "none";
// };

//===================(3) Preventing [Event bubbling] with e.stopPropagation() ==========================
button.addEventListener("click", function (e) {
  container.style.backgroundColor = "red";
  e.stopPropagation();
});

container.addEventListener("click", function () {
  container.style.display = "none";
  // container.classList.toggle('hide')
});
