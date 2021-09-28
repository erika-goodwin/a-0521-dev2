const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//===================(1) test==========================
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function () {
  console.log(this.innerText);
});

//===================(2) ==========================
const changecolor = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);

  box.addEventListener("click", function () {
    console.log(box.style.backgroundColor);
  });
  box.addEventListener("click", changecolor);
}
