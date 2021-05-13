const inputName = document.querySelector('#inputName');
const inputFirstName = document.querySelector('#firstName');
const inputMail = document.querySelector('#inputMail');
const inputTel = document.querySelector('#inputTel');
const inputAddress = document.querySelector('#inputAddress');
const inputCity = document.querySelector('#inputCity');
const inputZip = document.querySelector('#inputZip');

// commencement de la function de recuperation de données
const submitFormBtn = document.querySelector('.btn-primary')
submitFormBtn.addEventListener('click', function (e) {
     e.preventDefault()
     
     
     // recuperation des données utilisateur
     let contact = {}
     contact.name = inputName.value;
     contact.familyName = inputFirstName.value;
     contact.address = inputAddress.value;
     contact.city = inputCity.value + "," + inputZip.value;

     console.log(contact);

})



