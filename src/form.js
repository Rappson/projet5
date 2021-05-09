const inputName = document.querySelector('#inputName');
const inputFirstName = document.querySelector('#firstName');
const inputMail = document.querySelector('#inputMail');
const inputTel = document.querySelector('#inputTel');
const inputAdress = document.querySelector('#inputAdress');
const inputCity = document.querySelector('#inputCity');
const inputZip = document.querySelector('#inputZip');

// TEMPORAIRE
const submitFormBtn = document.querySelector('.btn-primary')

submitFormBtn.addEventListener('click', function(e){
     e.preventDefault()
     let contact = {}
     contact.name = inputName.textContent;
     contact.familyName = inputFirstName.textContent;
     // contact.adress = inputAdress.textContent;
     contact.city = inputCity.textContent + "," + inputZip.textContent;
     console.log(contact);
})



