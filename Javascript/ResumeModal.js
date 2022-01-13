//
//
//
//

/* Unused code, I learned a neater way to code this. Keeping it for memories. */

const modal = document.querySelector(".modalBg");
const button = document.querySelector("#Resume");
const modalBg = document.querySelector(".modalOverlay");
const closeButton = document.querySelector(".closeButton");

const contact = document.querySelector("#Contact");
const contactModal = document.querySelector("#contactModal");
const contactModalContent = document.querySelector("#contactModalContent");
const contactClose = document.querySelector("#contactClose");

const personal = document.querySelector("#pPersonal");
const pModal = document.querySelector("#pModal");
const pModalCon = document.querySelector("#pModalCon");
const pModalClose = document.querySelector("#personalClose");

const sassys = document.querySelector("#pSassy");
const sModal = document.querySelector("#sModal");
const sModalCon = document.querySelector("#sModalCon");
const sModalClose = document.querySelector("#sassysClose");

button.onclick = function () {
  if ((modal.classList.contains = "modalOutro")) {
    modal.className = modal.className.replace(" modalOutro", "");
  }
  modal.className += " modalIntro";
};
closeButton.onclick = () => {
  modal.className += " modalOutro";
  modal.className = modal.className.replace(" modalIntro", "");
};

contact.onclick = () => {
  if (contactModal.classList.contains("fadeOutBg")) {
    contactModal.classList.toggle("fadeOutBg");
    contactModalContent.classList.toggle("downwords");
  }
  contactModal.classList.toggle("fadeInBg");
  contactModalContent.classList.toggle("upwords");
};

contactClose.onclick = () => {
  contactModal.classList.toggle("fadeOutBg");
  contactModalContent.classList.toggle("downwords");
  if (contactModal.classList.contains("fadeInBg")) {
    contactModal.classList.toggle("fadeInBg");
    contactModalContent.classList.toggle("upwords");
  }
};
sModalClose.onclick = () => {
  sModal.classList.toggle("fadeOutBg");
  sModalCon.classList.toggle("downwords");
  if (sModal.classList.contains("fadeInBg")) {
    sModal.classList.toggle("fadeInBg");
    sModalCon.classList.toggle("upwords");
  }
};

pModalClose.onclick = () => {
  pModal.classList.toggle("fadeOutBg");
  pModalCon.classList.toggle("downwords");
  if (pModal.classList.contains("fadeInBg")) {
    pModal.classList.toggle("fadeInBg");
    pModalCon.classList.toggle("upwords");
  }
};

personal.onclick = () => {
  if (pModal.classList.contains("fadeOutBg")) {
    pModal.classList.toggle("fadeOutBg");
    pModalCon.classList.toggle("downwords");
  }
  pModal.classList.toggle("fadeInBg");
  pModalCon.classList.toggle("upwords");
};

personal.onclick = () => {
  if (pModal.classList.contains("fadeOutBg")) {
    pModal.classList.toggle("fadeOutBg");
    pModalCon.classList.toggle("downwords");
  }
  pModal.classList.toggle("fadeInBg");
  pModalCon.classList.toggle("upwords");
};

sassys.onclick = () => {
  if (sModal.classList.contains("fadeOutBg")) {
    sModal.classList.toggle("fadeOutBg");
    sModalCon.classList.toggle("downwords");
  }
  sModal.classList.toggle("fadeInBg");
  sModalCon.classList.toggle("upwords");
};

window.onclick = function (event) {
  if (event.target == modalBg) {
    modal.className += " modalOutro";
    modal.className = modal.className.replace(" modalIntro", "");
  }
  if (event.target == contactModal) {
    contactModal.classList.toggle("fadeOutBg");
    contactModalContent.classList.toggle("downwords");
    if (contactModal.classList.contains("fadeInBg")) {
      contactModal.classList.toggle("fadeInBg");
      contactModalContent.classList.toggle("upwords");
    }
  }
  if (event.target == pModal) {
    pModal.classList.toggle("fadeOutBg");
    pModalCon.classList.toggle("downwords");
    if (pModal.classList.contains("fadeInBg")) {
      pModal.classList.toggle("fadeInBg");
      pModalCon.classList.toggle("upwords");
    }
  }
  if (event.target == sModal) {
    sModal.classList.toggle("fadeOutBg");
    sModalCon.classList.toggle("downwords");
    if (sModal.classList.contains("fadeInBg")) {
      sModal.classList.toggle("fadeInBg");
      sModalCon.classList.toggle("upwords");
    }
  }
};
