const number = document.querySelector('#num');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');
const form = document.querySelector('form');

const convertToRoman = num => {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let romanized = '';

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
      result.innerHTML = romanized;
    }
  }
  return romanized;
};

submit.addEventListener('click', e => {
  e.preventDefault();
  convertToRoman(number.value);
  form.reset();
});
