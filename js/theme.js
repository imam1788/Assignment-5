document.getElementById('theme-btn').addEventListener('click', function() {
  let randomColor = "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
  document.body.style.backgroundColor = randomColor;
});
