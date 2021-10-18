//Post <ul>
const listElement = document.querySelector(".posts");
//Template
const postTemplate = document.getElementById("single-post");
//For button [add]
const form = document.querySelector("#new-post form");
//For button [fetch posts]
const fetchButton = document.querySelector("available-posts button");
//For deleting post
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  //[OLD WAY] ============================ XMLHttpRequest
  // //Promises
  // const promise = new Promise((resolve, reject) => {
  //   // INSTANTIATE an XMLHttpRequest object
  //   const xhr = new XMLHttpRequest();

  //   //Send a Request (1)
  //   xhr.open(method, url);

  //   xhr.responseType = "json";

  //   //Define a Callback Function
  //   // - What do do when the response is ready
  //   xhr.onload = function () {
  //     // resolve(xhr.response);

  //     //ERROR HANDLING
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error("something went wrong!"));
  //     }
  //   };

  //   //ERROR HANDLING
  //   xhr.onerror = function () {
  //     console.log(xhr.response);
  //     console.log(xhr.status);
  //   };

  //   //Send a Request (2)
  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;
  //[OLD WAY] ============================

  //[NEW WAY] =============================== FETCH
  //fetch(URL): default - get method
  //fetch(URL, OBJECT)
  //
  //OBJECT = {
  // method: 'GET, POST, PUT, DELETE, PATCH},
  // body: '[{'a': 1}]'
  //header: { content-type: 'application/json'}

  const response = fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
  return response;
  //[NEW WAY] ===============================
}

async function fetchPosts() {
  //Variable receiving the Promises
  try {
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
      //This is for /DELETING/ method
      postElClone.querySelector("li").id = post.id;
      //added Element
      listElement.appendChild(postElClone);
    }
  } catch (error) {
    console.log(error);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title, //can be wrote like 'title,' as a short hand
    body: content,
    userId: userId,
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

//CREATING NEW POST BY ADD BUTTON
fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //title form input
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  //content form input
  const enteredContent = evemt.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

//DELETING
postList.addEventListener("click", (event) => {
  // console.log(event.target.tagName); //which tag is selecting (clicking)
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    // console.log(postId);
    //delete the li here
    sendHttpRequest(
      "DELETE",
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
  }
});

// fetchPosts();
// createPost("DUMMY", "A dummy post!");
