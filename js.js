let form = document.querySelector("#valoration");
let inputs = document.querySelectorAll(".valoration__input");
let valorationState = document.querySelector(".rating__valoration");
let thanksState = document.querySelector(".rating__thanks");
let selection = document.querySelector(".selection");
let errorMsg = document.querySelector(".error");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("work");
  inputs.forEach((item) => {
    if (item.checked) {
      selection.innerHTML = `You selected ${item.value} out of 5`;
      valorationState.style.display = "none";
      thanksState.style.display = "block";
    } else {
      errorMsg.style.display = "block";
    }
  });
});
