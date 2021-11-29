import { addClass, removeClass } from "./utils-class";

const accordion = () => {
  // Grab all HTML element with accordion class
  const accordionContainer = document.querySelectorAll(".accordion");
  console.log(accordionContainer);
  accordionContainer.forEach((accordionEl) => {
    // Create a button element that will cover accordion icon
    const accBtn = document.createElement("button");
    // Set the classes for the button
    addClass(
      accBtn,
      "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 rotate-0"
    );
    accBtn.style.top = "50%";
    // Set the button innerHTML with accordion icon's svg syntax
    accBtn.innerHTML = `
        <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.75 7.5L18.5 1" stroke="black" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    // Grab ul element that consist the footer menus
    const ulListMenu = accordionEl.getElementsByTagName("ul")[0];
    addClass(ulListMenu, "transition duration-200");

    // Create a function to control the accordion button and the menu content
    const onClickAccordion = () => {
      // When the menu content still not displayed yet
      if (ulListMenu.className.includes("h-0")) {
        addClass(accBtn, "rotate-180");
        addClass(ulListMenu, "opacity-100");
        removeClass(ulListMenu, "h-0 invisible opacity-0");
      } else {
        removeClass(accBtn, "rotate-180");
        removeClass(ulListMenu, "opacity-100");
        addClass(ulListMenu, "h-0 invisible opacity-0");
      }
    };

    // When the accordionBtn clicked, run onClickAccordion function
    accBtn.addEventListener("click", onClickAccordion);

    accordionEl.getElementsByTagName("h5")[0].append(accBtn);
  });
};

// Create a conditional statement, when the window.innerWidth less than 768px (mobile), run accordion function when the window load
if (window.innerWidth < 768) {
  console.log("Hello World");
  window.addEventListener("load", accordion);
}
