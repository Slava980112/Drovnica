document.addEventListener("DOMContentLoaded", function() {
    const pageLoader = document.querySelector(".page-loader");
    setTimeout(function() {
      pageLoader.style.display = "none";
    }, 1000);
  });