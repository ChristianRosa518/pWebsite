const logo = document.querySelector(".logo");
const navItem = document.querySelectorAll(".navItem");

const about = document.querySelector(".profilePicture");
const projects = document.querySelector(".projectsItem");

const HeaderOptions = {
  root: null,
  threshold: 0.4,
  rootMargin: "0px",
};

const HeaderObserver = new IntersectionObserver(function (
  entries,
  HeaderObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      logo.classList.toggle("logoAboutColor");
      for (var i = 0; i < navItem.length; i++) {
        navItem[i].classList.toggle("navItemBlue");
      }
      console.log("Blue Added");
    } else {
      if (logo.classList.contains("logoAboutColor")) {
        logo.classList.toggle("logoAboutColor");
        for (var i = 0; i < navItem.length; i++) {
          navItem[i].classList.toggle("navItemBlue");
        }
        console.log("Blue removed");
        return;
      }
    }
  });
},
HeaderOptions);

const projectObserver = new IntersectionObserver(function (
  entries,
  HeaderObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      logo.classList.toggle("logoProjectColor");
      for (var i = 0; i < navItem.length; i++) {
        navItem[i].classList.toggle("navItemPink");
      }
      console.log("Pink Added");
    } else {
      if (logo.classList.contains("logoProjectColor")) {
        logo.classList.toggle("logoProjectColor");
        for (var i = 0; i < navItem.length; i++) {
          navItem[i].classList.toggle("navItemPink");
        }
        console.log("Pink removed");
        return;
      }
    }
  });
},
HeaderOptions);

HeaderObserver.observe(about);
projectObserver.observe(projects);
