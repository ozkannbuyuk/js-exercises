document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const activeListItem = document.querySelector(".list-item.active");

  function changeTheme(themeClass, listItemClass) {
    sidebar.className = `sidebar ${themeClass}`;
    activeListItem.className = `list-item ${themeClass} active`;
  }

  document.querySelector(".dark").addEventListener("click", () => {
    changeTheme("dark", "");
  });

  document.querySelector(".night").addEventListener("click", () => {
    changeTheme("night", "night");
  });

  document.querySelector(".light").addEventListener("click", () => {
    changeTheme("light", "light");
  });
});
