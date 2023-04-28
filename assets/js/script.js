let modalsControllers = document.querySelectorAll(".modal-controller");

modalsControllers.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log("eleemnt:", element.dataset?.modalTarget);
    // event.stopPropagation();
    console.log("event.target:", event.target);
    const modalId = event.target.dataset?.modalTarget;
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    showModal(modal);
  },false);
});
// document.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("event.target:", event.target);
//     if (event.target.classList.contains("modal-controller")) {
//       const modalId = event.target.dataset?.modalTarget;
//       if (!modalId) return;
//       const modal = document.getElementById(modalId);
//       showModal(modal);
//     } else if (event.target.classList.contains("modal-dismiss")) {
//       const modalId = event.target.dataset?.modalTarget;
//       if (!modalId) return;
//       const modal = document.getElementById(modalId);
//       hideModal(modal);
//     } else if (event.target.classList.contains("modal-visible")) {
//       const modal = document.getElementById(event.target.id);
//       hideModal(modal);
//     }
//   },
//   true
// );

const showModal = (modal) => {
  modal.classList.add("modal-visible");
  modal.style.display = "flex";
};

const hideModal = (modal) => {
  modal.classList.remove("modal-visible");
  modal.style.display = "none";
};
