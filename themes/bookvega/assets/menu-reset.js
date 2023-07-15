document.addEventListener("DOMContentLoaded", function(event) {
  var storedScrollTop = localStorage.getItem("storedScrollTop");
  var menu = document.querySelector("body > main > aside.book-menu > nav");
  console.log("Menu after DOM element:", menu);
  menu.scrollTop = storedScrollTop;
});

window.onbeforeunload = function(e) {
  var menu = document.querySelector("body > main > aside.book-menu > nav");
  console.log("Menu bufore unload element:", menu);
  localStorage.setItem('storedScrollTop', menu.scrollTop);
};