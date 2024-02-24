async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = await response.json();
    renderUserList(userList);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Operation completed.");
  }
}

function renderUserList(userList) {
  const userListDOM = document.querySelector(".user-list");
  let userItems = "";
  userList.forEach((user) => {
    userItems += `
      <li class="user-card">
        <img
          src="https://i.pravatar.cc/150?img=${user.id}"
          alt="${user.name}"
          class="user-image"
        />
        <div class="user-info">
          <h3 class="user-name">${user.name}</h3>
          <p class="user-username">${user.username}</p>
          <p class="user-email">${user.email}</p>
          <p class="user-website">${user.website}</p>
          <p class="user-userId">UserID: ${user.id}</p>
        </div>
      </li>
    `;
  });
  userListDOM.innerHTML = userItems;
}

getUserData();
