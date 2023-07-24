// Get the elements
const cardNumberElement = document.querySelector('.card-number');
const nameElement = document.querySelector('.name');
const validDateElement = document.querySelector('.valid-date');

// Function to update card details in real-time
function updateCardDetails() {
  cardNumberElement.textContent = cardNumberInput.value;
  nameElement.textContent = nameInput.value;
  validDateElement.textContent = validDateInput.value;
}

// Add event listeners to input fields
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', updateCardDetails);

const nameInput = document.getElementById('name');
nameInput.addEventListener('input', updateCardDetails);

const validDateInput = document.getElementById('valid-date');
validDateInput.addEventListener('input', updateCardDetails);
