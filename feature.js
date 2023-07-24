const cardNumberInput = document.getElementById('card-number');
const nameInput = document.getElementById('name');
const validDateInput = document.getElementById('valid-date');
const cardNumberElement = document.querySelector('.card-number');
const nameElement = document.querySelector('.name');
const validDateElement = document.querySelector('.valid-date h5');

cardNumberInput.addEventListener('input', () => {
  cardNumberElement.textContent = cardNumberInput.value;
});

nameInput.addEventListener('input', () => {
  nameElement.textContent = nameInput.value;
});

validDateInput.addEventListener('input', () => {
  validDateElement.textContent = validDateInput.value;
});