document.addEventListener("DOMContentLoaded", () => {
  const postListDOM = document.querySelector(".post-list");

  const createPostUI = (post) => {
    const postItem = document.createElement("li");
    postItem.classList.add("post-item");

    const postBody = document.createElement("div");
    postBody.classList.add("post-body");

    const postId = document.createElement("span");
    postId.classList.add("post-id");
    postId.innerHTML = `Post Id: <b>${post.id}</b>`;

    const postTitle = document.createElement("strong");
    postTitle.classList.add("post-title");
    postTitle.textContent = post.title;

    const postContent = document.createElement("p");
    postContent.classList.add("post-content");
    postContent.textContent = post.body;

    const readMoreButton = document.createElement("button");
    readMoreButton.classList.add("post-button");
    readMoreButton.textContent = "Read More";

    postBody.appendChild(postId);
    postBody.appendChild(postTitle);
    postBody.appendChild(postContent);

    postItem.appendChild(postBody);
    postItem.appendChild(readMoreButton);

    postListDOM.appendChild(postItem);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      data.forEach((post) => createPostUI(post));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
});
