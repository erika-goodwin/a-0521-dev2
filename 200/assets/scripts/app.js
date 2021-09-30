//Post <ul>
const listElement = document.querySelector(".posts");
//Template
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("available-posts");
const postList = document.querySelector("ul");

//[OLD WAY] XMLHttpRequest
function sendHttpRequest(method, url, data) {
  //Promises
  const promise = new Promise((resolve, reject) => {
    // INSTANTIATE an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //Send a Request (1)
    xhr.open(method, url);

    xhr.responseType = "json";

    //Define a Callback Function
    // - What do do when the response is ready
    xhr.onload = function () {
      resolve(xhr.response);
    };

    //Send a Request (2)
    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPosts() {
  //Variable receiving the Promises
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  for (const post of responseData) {
    //deployed <li></lli>
    const postElClone = document.importNode(postTemplate.content, true);
    //added <h2>
    postElClone.querySelector("h2").textContent = post.title.toUpperCase();
    //added <p>
    postElClone.querySelector("p").textContent = post.body;
    postElClone.querySelector("li").id = post.id;
    //added Element
    listElement.appendChild(postElClone);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = evemt.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  // console.log(event.target.tagName);
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    // console.log(postId);
    sendHttpRequest(
      "DELETE",
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
  }
});

// fetchPosts();
// createPost("DUMMY", "A dummy post!");
