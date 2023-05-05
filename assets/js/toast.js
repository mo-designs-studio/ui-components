const body = document.querySelector("body");
const toastDisplay = document.querySelectorAll(".toast-display");

const createToastsContainer = () => {
  const checkContainerExist = document.querySelector(".toasting");
  if (checkContainerExist) return;
  const toasting = document.createElement("div");
  toasting.classList.add("toasting");
  body.appendChild(toasting);
};

const toast = ({ status, position, title, text, icon, lifeTime = 5000 }) => {
  createToastsContainer();
  const toasting = document.querySelector(".toasting");
  const toastStatus = "toast-" + (status || "info");
  const toastPosition = position || "pos-top-start";
  const toastTitleText = title || "toast title";
  const toastMessageText = text || "toast text include the message to show";
  const defaulticons = {
    "toast-success": ["bi", "bi-check-circle-fill"],
    "toast-confirm": ["bi", "bi-calendar-check-fill"],
    "toast-info": ["bi", "bi-info-circle-fill"],
    "toast-caution": ["bi", "bi-bell-fill"],
    "toast-alarm": ["bi", "bi-alarm-fill"],
    "toast-tip": ["bi", "bi-lightbulb-fill"],
  };

  const toastIcon = icon?.split(" ") || defaulticons[toastStatus];
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
  iconElement.classList.add("icon", ...toastIcon);
  const toastIconContainer = document.createElement("div");
  toastIconContainer.classList.add("toast-icon");
  toastIconContainer.appendChild(iconElement);
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");
  toastContainer.appendChild(toastTextContiner);
  toastContainer.appendChild(toastIconContainer);
  const toast = document.createElement("div");
  toast.classList.add("toast", toastStatus);
  const toastCloser = document.createElement("div");
  toastCloser.classList.add("toast-closer");
  const closerIcon = document.createElement("i");
  closerIcon.classList.add("bi", "bi-x", "icon");
  toastCloser.appendChild(closerIcon);
  toast.appendChild(toastContainer);
  toast.appendChild(toastCloser);
  toasting.classList.add(toastPosition);
  toasting.append(toast);
  const dismissTimeout = setTimeout(() => {
    if (lifeTime > 0) body.removeChild(toasting);
  }, lifeTime);
  toastCloser.addEventListener("click", (_) => {
    clearTimeout(dismissTimeout);
    body.removeChild(toasting);
  });
};

toastDisplay.forEach((element) => {
  element.addEventListener("click", (_) => {
    const status = element.dataset?.toastStatus;
    const position = element.dataset?.toastPosition;
    const title = element.dataset?.toastTitle;
    const text = element.dataset?.toastText;
    const icon = element.dataset?.toastIcon;
    const lifeTime = element.dataset?.toastLifeTime;
    toast({ status, position, title, text, icon, lifeTime });
  });
});
