const ratingForm = document.querySelector("form");
const card = document.querySelector(".subscription-card");
ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.checkValidity());
  if (!event.target.checkValidity()) {
    ratingForm.classList.add("invalid");
    return;
  }
  ratingForm.classList.remove("invalid");
  const template = document
    .querySelector("[data-thanks-template]")
    .content.cloneNode(true);
  const formData = new FormData(ratingForm);
  template.querySelector("[data-email]").textContent =
    formData.get("subscribe-email");
  card.classList.add("fade");
  setTimeout(() => {
    card.replaceChildren(template);
    card.classList.add("submitted");
    card.classList.remove("fade");
  }, 600);
});
