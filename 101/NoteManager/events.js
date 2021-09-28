var h2 = document.querySelector("header h2");

// //Clicking the [(h2) Note Manager ] > console.log
// h2.onclick = function () {
//   console.log("clicked");
// };

// //On mounse over the [(h2) Note Manager ] > console.log
// h2.onmouseover = function () {
//   console.log("mouseover");
// };

// // ↑↑ Kinda same ↑↑
// // But this is NOT event. there is no trigger
// function a() {
//   console.log("Clicked");
// }
// function b() {
//   console.log("MouseOver");
// }

// h2.onclick = a();
// h2.onmouseover = b();

/****
 *
 * Better way than onmouse cz there is event & function
 */

var h2 = document.querySelector("header h2");

h2.addEventListener("click", function () {
  console.log("clicked!");
});
