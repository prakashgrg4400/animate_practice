let heading = document.querySelector("#heading");
let container = document.querySelector(".container");
let buttons = document.querySelectorAll(".side-nav .animate-buttons button");
console.log(container);

const showAnimations = document.querySelector(".show-animations");

buttons.forEach((button) => {
  button.addEventListener("click", handleAnimation);
});

function handleAnimation(event) {
  console.log(event.target);
  heading.classList.add(
    "animate__animated",
    `animate__${event.target.textContent}`
  );
  event.target.classList.add(
    "animate__animated",
    `animate__${event.target.textContent}`
  );
  setTimeout(() => {
    heading.classList.remove(
      "animate__animated",
      `animate__${event.target.textContent}`
    );
    event.target.classList.remove(
      "animate__animated",
      `animate__${event.target.textContent}`
    );
  }, 1000);
}

//!=============== dark mode =====================

let moonOrSun = document.querySelectorAll("#toggle button");
let slider = document.querySelector(".controller");
let section = document.querySelector(".section");
let description = document.querySelector("#description");
let sidenav = document.querySelector(".side-nav");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let btnHeader = document.querySelector("h4");
console.log(moonOrSun);

moonOrSun.forEach((btn) => {
  btn.addEventListener("click", handleToggle);
});

function handleToggle(event) {
  // console.log(event.target.parentNode.classList.contains("moon"));
  let darkMode = event.target.parentNode.classList.contains("moon");
  if (darkMode) {
    slider.style.left = "1.9rem";
    heading.style.color = "#4672FE";
    section.style.backgroundColor = "#111111";
    description.style.color = "#E0E0E0";
    sun.style.color = "#E0E0E0";
    btnHeader.style.color = "#E0E0E0";
    sidenav.style.backgroundColor = "#15151D";
    showAnimations.style.backgroundColor = "#15151D";
    showAnimations.style.color = "#E0E0E0";
    showAnimations.style.borderColor = "#E0E0E0";
    container.style.backgroundColor = "black";
    buttons.forEach((button) => {
      button.style.color = "#E0E0E0";
    });
  } else {
    slider.style.left = "1px";
    heading.style.color = "#351C75";
    section.style.backgroundColor = "#FCE5CD";
    description.style.color = "#E69138";
    moon.style.color = "#000000";
    btnHeader.style.color = "#000000";
    sidenav.style.backgroundColor = "#F7D7B5";
    showAnimations.style.backgroundColor = "transparent";
    showAnimations.style.color = "#351C75";
    showAnimations.style.borderColor = "#351C75";
    container.style.backgroundColor = "blanchedalmond";
    buttons.forEach((button) => {
      button.style.color = "#000000";
    });
  }
}

//!============ handeling show and hide of side nav =====================
console.log(showAnimations);
showAnimations.addEventListener("click", handleShowAnimation);

function handleShowAnimation(event) {
  if (event.target.textContent === "See animations") {
    sidenav.style.right = "0px";
    section.style.width = "calc(100vw - 300px)";
    event.target.textContent = "Close animations";
  } else {
    sidenav.style.right = "-300px";
    section.style.width = "100vw";
    event.target.textContent = "See animations";
  }
}
