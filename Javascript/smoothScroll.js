var home = document.querySelector("#homeAnchor");

home.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
