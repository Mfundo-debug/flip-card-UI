document.addEventListener("DOMContentLoaded", function() {
  const card = document.querySelector(".card");
  const cardFront = document.querySelector(".front-face");
  const cardBack = document.querySelector(".back-face");
  const formSection = document.querySelector(".fill-in-form");

  // Flip the card on click
  card.addEventListener("click", function() {
    card.classList.toggle("flipped");
  });

  // Show the fill-in form when the card is flipped
  card.addEventListener("transitionend", function() {
    if (card.classList.contains("flipped")) {
      formSection.style.display = "block";
    } else {
      formSection.style.display = "none";
    }
  });

  // Validate and format the card number input
  const cardNumberInput = document.getElementById("card-number");
  cardNumberInput.addEventListener("input", function() {
    let trimmedValue = this.value.replace(/\s+/g, ""); // Remove spaces
    let formattedValue = "";
    for (let i = 0; i < trimmedValue.length; i += 4) {
      formattedValue += trimmedValue.substr(i, 4) + " ";
    }
    this.value = formattedValue.trim();
  });

  // Validate and format the valid date input
  const validDateInput = document.getElementById("valid-date");
  validDateInput.addEventListener("input", function() {
    let trimmedValue = this.value.replace(/\s+/g, ""); // Remove spaces
    let formattedValue = "";
    for (let i = 0; i < trimmedValue.length; i += 2) {
      formattedValue += trimmedValue.substr(i, 2) + "/";
    }
    this.value = formattedValue.trim();
  });
});
