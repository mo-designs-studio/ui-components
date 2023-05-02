const body = document.querySelector("body");
const createToastsContainer = () => {
  const checkContainerExist = document.querySelector(".toasting");
  if (checkContainerExist) return;
  const toasting = document.createElement("div");
  toasting.classList.add("toasting");
  body.appendChild(toasting);
};

const toast = ({ status, title, text, icon, lifeTime = 5000 }) => {
  createToastsContainer();
  const toasting = document.querySelector(".toasting");
  const toastStatus = "toast-" + (status || "info");
  const toastTitleText = title || "toast title";
  const toastMessageText = text || "toast text include the message to show";
  const defaulticons = {
    "toast-success": ["bi", "bi-check-circle-fill"],
    "toast-info": ["bi", "bi-info-circle-fill"],
    "toast-warning": ["bi", "bi-cone-striped"],
    "toast-alert": ["bi", "bi-exclamation-circle-fill"],
    "toast-tip": ["bi", "bi-lightbulb-fill"],
  };

  const toastIcon = icon || defaulticons[toastStatus];
  const toastHeading = document.createElement("h6");
  toastHeading.innerHTML = toastTitleText;
  const toastTitle = document.createElement("div");
  toastTitle.classList.add("toast-title");
  toastTitle.appendChild(toastHeading);
  const toastParagraph = document.createElement("p");
  toastParagraph.innerHTML = toastMessageText;
  const toastMessage = document.createElement("div");
  toastMessage.classList.add("toast-message");
  toastMessage.appendChild(toastParagraph);
  const toastTextContiner = document.createElement("div");
  toastTextContiner.classList.add("toast-text-container");
  toastTextContiner.appendChild(toastTitle);
  toastTextContiner.appendChild(toastMessage);
  const iconElement = document.createElement("i");
  iconElement.classList.add(...toastIcon);
  const toastIconContainer = document.createElement("div");
  toastIconContainer.classList.add("toast-icon");
  toastIconContainer.appendChild(iconElement);
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");
  toastContainer.appendChild(toastTextContiner);
  toastContainer.appendChild(toastIconContainer);
  const toast = document.createElement("div");
  toast.classList.add("toast", toastStatus);
  toast.onclick = function clickToast() {
    toasting.removeChild(toast);
    lifeTime = 0;
  };
  toast.appendChild(toastContainer);
  toasting.append(toast);

  setTimeout(() => {
    body.removeChild(toasting);
  }, lifeTime);
};

const toastSuccess = ({ status, title, text, icon, lifeTime = 5000 }) => {
  
}
