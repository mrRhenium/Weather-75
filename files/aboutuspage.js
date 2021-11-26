const phone = document.querySelector("#phone");
phone.addEventListener("click", () => {
  var number = prompt("Enter the mobile no.: ");
  phone.setAttribute("href", `tel:${number}`);
});
