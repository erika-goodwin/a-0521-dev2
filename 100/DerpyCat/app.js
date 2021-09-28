const allImages = document.getElementsByTagName("img");
console.log(allImages);

for (let img of allImages) {
  img.src =
    "https://static.boredpanda.com/blog/wp-content/uploads/2021/05/60af991566fbb_sv61aem6ozy61__700.jpg";
}

const squareImages = document.getElementsByClassName("square");
console.dir(squareImages);

for (let img of squareImages) {
  img.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}

const title = document.getElementById("felis-title");
title.innerHTML = "NYAAAA";
