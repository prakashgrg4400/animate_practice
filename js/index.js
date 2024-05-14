let heading = document.querySelector("#heading");
console.log(heading);

let buttons = document.querySelectorAll(".side-nav button");
console.log(buttons);

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
