const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector(".modal-close")
const modalLink = document.querySelector(".modal-menu__link");

openModal.addEventListener("click", e => {
  e.preventDefault();
  const modalOverlay = document.querySelector("#modal-overlay");
  return modalOverlay.style.display = 'flex';
})

closeModal.addEventListener("click", e => {
  e.preventDefault();
  const modalOverlay = document.querySelector("#modal-overlay");
  return modalOverlay.style.display = 'none';
})

modalLink.addEventListener("click", e => {
  e.preventDefault();
})