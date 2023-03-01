let docTitle = document.title;
window.addEventListener("blur", () =>{
document.title = "go back to my CV";
})
window.addEventListener("focus", () =>{
document.title = docTitle;
})

var topButton = document.getElementById("top-button");
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};