// Grab all anchor elements that have href that start with #
const smoothAnchorElements = document.querySelectorAll("a[href^='#']");
console.log(smoothAnchorElements);

smoothAnchorElements.forEach((el) => {
  el.addEventListener("click", function (e) {
    // Using prevent default to turn off default behaviour of anchor
    e.preventDefault();

    // Grab the href attribute from the clicked smoothAnchorElements
    const attributeDataBtn = this.getAttribute("href");

    // Grab the browse-the-room element from the href attribute value. Since the attributeDataBtn is #browse-the-room, replace the # with '' so that we can get the element with id browse-the-room.
    if (document.getElementById(attributeDataBtn.replace("#", "")))
      // Change the scrollIntoView behavior to smooth
      document.querySelector(attributeDataBtn).scrollIntoView({
        behavior: "smooth",
      });
  });
});
