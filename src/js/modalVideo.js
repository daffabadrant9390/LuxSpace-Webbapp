import { addClass, removeClass } from "./utils-class";

const modalTriggerBtn = [...document.getElementsByClassName("modal-trigger")];
console.log(modalTriggerBtn);
const modalWrapperClassName = "fixed inset-0 bg-black opacity-35";
modalTriggerBtn.forEach((element) => {
  element.addEventListener("click", function () {
    // Create modalWrapper element that wrap the modalCntent and modalOverlay
    const modalWrapper = document.createElement("div");
    // Create modalOverlay element that contains the overlay at the outside of modalContent
    const modalOverlay = document.createElement("div");

    // If modalOverlay clicked, remove the modalWrapper (close the modal)
    modalOverlay.addEventListener("click", function () {
      modalWrapper.remove();
    });

    // Set class for modalWrapper
    addClass(
      modalWrapper,
      "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen"
    );

    // Set class for modalOverlay
    addClass(modalOverlay, modalWrapperClassName);

    // create new element for modalContent. Then, set the modalContent.innerHTML with the value inside data-content in element.attributes
    const modalContent = document.createElement("div");
    modalContent.innerHTML = element.attributes?.["data-content"].value;
    // Set the class of modalContent
    addClass(modalContent, "bg-white p-0 md:p-6 z-10");

    // Append modalOverlay and modalContent inside the modalWrapper
    modalWrapper.append(modalOverlay);
    modalWrapper.append(modalContent);
    document.body.append(modalWrapper);
  });
});
