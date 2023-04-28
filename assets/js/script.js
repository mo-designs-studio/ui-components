const body = document.body;
const modalDisplay = document.querySelectorAll(".modal-display");
const modalDismiss = document.querySelectorAll(".modal-dismiss");
const modal = document.querySelectorAll(".modal");

modalDisplay.forEach((element) => {
  element.addEventListener("click", (_) => {
    const modalId = element.dataset?.modalTarget;
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    showModal(modal);
  });
});
modalDismiss.forEach((element) => {
  element.addEventListener("click", (_) => {
    const modalId = element.dataset?.modalTarget;
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    hideModal(modal);
  });
});
modal.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-visible")) {
      const modal = document.getElementById(event.target.id);
      hideModal(modal);
    }
  });
}, false);

const showModal = (modal) => {
  body.style.overflow = "hidden";
  modal.classList.add("modal-visible");
  modal.style.display = "flex";
};

const hideModal = (modal) => {
  body.style.overflow = "unset";
  modal.classList.remove("modal-visible");
  modal.style.display = "none";
};
