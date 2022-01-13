<<<<<<< HEAD
/* This code is lucky, this code calls one array and uses that array's position to call and close other arrays.
if this code wasn't wrote in order, my modals wouldn't be able to close let alone open. I need to figure out a way to call an element inside an array then
call array's that associate with that element, verify it, then manipulate it.. */

const modalsContent = document.querySelectorAll(".modalWhiteContent");
const modals = document.querySelectorAll(".modalFadeBg");
const modalClose = document.querySelectorAll(".closeButton");
const modalsOpen = document.querySelectorAll(".callModal");

for (let i = 0; i < modalsOpen.length; i++) {
  modalsOpen[i].addEventListener(
    "click",
    () => {
      if (modals[i].classList.contains("fadeOutBg")) {
        modals[i].classList.toggle("fadeOutBg");
        modalsContent[i].classList.toggle("downwords");
      }
      modals[i].classList.toggle("fadeInBg");
      modalsContent[i].classList.toggle("upwords");
    },
    false
  );
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener(
    "click",
    () => {
      modals[i].classList.toggle("fadeOutBg");
      modalsContent[i].classList.toggle("downwords");
      //   console.log("modalClosed");
      if (modals[i].classList.contains("fadeInBg")) {
        modals[i].classList.toggle("fadeInBg");
        modalsContent[i].classList.toggle("upwords");
        return;
      }
    },
    false
  );
}

window.onclick = function (event) {
  for (let i = 0; i < modals.length; i++)
    if (event.target === modals[i]) {
      modals[i].classList.toggle("fadeOutBg");
      modalsContent[i].classList.toggle("downwords");
      //   console.log("modalClosed");
      if (modals[i].classList.contains("fadeInBg")) {
        modals[i].classList.toggle("fadeInBg");
        modalsContent[i].classList.toggle("upwords");
        return;
      }
    }
};
=======
/* This code is lucky, this code calls one array and uses that array's position to call and close other arrays.
if this code wasn't wrote in order, my modals wouldn't be able to close let alone open. I need to figure out a way to call an element inside an array then
call array's that associate with that element, verify it, then manipulate it.. */

const modalsContent = document.querySelectorAll(".modalWhiteContent");
const modals = document.querySelectorAll(".modalFadeBg");
const modalClose = document.querySelectorAll(".closeButton");
const modalsOpen = document.querySelectorAll(".callModal");

for (let i = 0; i < modalsOpen.length; i++) {
  modalsOpen[i].addEventListener(
    "click",
    () => {
      if (modals[i].classList.contains("fadeOutBg")) {
        modals[i].classList.toggle("fadeOutBg");
        modalsContent[i].classList.toggle("downwords");
      }
      modals[i].classList.toggle("fadeInBg");
      modalsContent[i].classList.toggle("upwords");
    },
    false
  );
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener(
    "click",
    () => {
      modals[i].classList.toggle("fadeOutBg");
      modalsContent[i].classList.toggle("downwords");
      //   console.log("modalClosed");
      if (modals[i].classList.contains("fadeInBg")) {
        modals[i].classList.toggle("fadeInBg");
        modalsContent[i].classList.toggle("upwords");
        return;
      }
    },
    false
  );
}

window.onclick = function (event) {
  for (let i = 0; i < modals.length; i++)
    if (event.target === modals[i]) {
      modals[i].classList.toggle("fadeOutBg");
      modalsContent[i].classList.toggle("downwords");
      //   console.log("modalClosed");
      if (modals[i].classList.contains("fadeInBg")) {
        modals[i].classList.toggle("fadeInBg");
        modalsContent[i].classList.toggle("upwords");
        return;
      }
    }
};
>>>>>>> db1fec41a08f04fdef0f5e9f0259e7a0c4baf067
