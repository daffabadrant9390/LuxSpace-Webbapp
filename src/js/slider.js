import { addClass, removeClass } from "./utils-class";

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const items = slider.querySelectorAll(".item");
  const previewSection = slider.querySelector(".preview");
  const previewImg = previewSection.querySelector("img");

  items.forEach((itemTrigger) => {
    itemTrigger.addEventListener("click", function (item) {
      console.log(item);
      // Grab the data-img of each item
      const dataImg = item.target.attributes?.["data-img"]?.value;
      // Loop all items once more to remove all "selected" class
      items.forEach((e) => {
        removeClass(e, "selected");
      });

      // then, add "selected" class to the clicked image
      addClass(item.target, "selected");

      // Change the src of previewImg based on dataImg from clicked image
      previewImg.setAttribute("src", dataImg);
    });
  });
});
