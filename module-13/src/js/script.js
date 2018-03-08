const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const variables = ['firstName', 'lastName', 'tel'];

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  let validObject = {};
  if (firstname.validity.patternMismatch) {
    validObject.firstName = false;
    firstname.setCustomValidity('Введите корректное имя');
  } else validObject.firstName = true;
  if (lastname.validity.patternMismatch) {
    validObject.lastName = false;
    lastname.setCustomValidity('Введите корректный фамилию');
  } else validObject.lastName = true;
  if (tel.validity.patternMismatch) {
    tel.
    tel.setCustomValidity('Введите корректный телефон');
    validObject.tel = false;
  } else validObject.tel = true;
  showResults(validObject);
}


function showResults(results) {
  resultsList.innerHTML = "";
  let firstName = document.createElement('li');
  let lastNAme = document.createElement('li');
  let tel = document.createElement('li');
  let paramArray = [firstName, lastNAme, tel];
  for (let i = 0; i < paramArray.length; i++) {
    let element = results[variables[i]];
    if (element == true) {
      paramArray[i].textContent = `SUCCESS: ${variables[i]} passed validation`;
      paramArray[i].classList.add('success');
    } else {
      `ERROR: ${variables[i]} failed validation`;
      paramArray[i].classList.add('error');
    }
    resultsList.append(paramArray[i]);
  }
}
