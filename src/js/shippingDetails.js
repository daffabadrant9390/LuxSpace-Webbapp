import { addClass, removeClass } from "./utils-class";

let data = {
  "complete-name": "",
  "email-address": "",
  address: "",
  "phone-number": "",
  courier: "",
  payment: "",
};

// For input element
const inputElements = document.querySelectorAll(
  "#shipping-details input[data-input]"
);
inputElements.forEach((inputEl) => {
  inputEl.addEventListener("change", function (event) {
    // Set the value of the data attribute that has the same value as event.target.id
    data[event.target.id] = event.target.value;
    console.log(data);

    // Run a function "check", that check whether all the input elements are filled
    checkInputFilled();
  });
});

// For Options Button (courier and payment)
const optionBtns = document.querySelectorAll(
  "#shipping-details button[data-name]"
);
console.log(optionBtns);
optionBtns.forEach((optionBtn) => {
  optionBtn.addEventListener("click", function () {
    console.log(this);
    const optionVal = this.attributes["data-value"].value;
    const optionName = this.attributes["data-name"].value;

    data[optionName] = optionVal;

    checkInputFilled();
  });
});

const checkInputFilled = () => {
  // Convert data's object into array, but only keep the values, not properties
  const findEmptyData = Object.values(data).filter((objVal) => objVal === "");
  if (findEmptyData.length == 0) {
    document.querySelector(
      "#shipping-details button[type='submit']"
    ).disabled = false;
  }
};
