const inputName = document.querySelector('#inputName');
const inputfirstName = document.querySelector('#firstName');
const inputMail = document.querySelector('#inputMail');
const inputTel = document.querySelector('#inputTel');
const inputAdress = document.querySelector('#inputAdress');

// TEMPORAIRE
const submitFormBtn = document.querySelector('.btn-primary')
submitFormBtn.addEventListener('click', function(e){
     e.preventDefault()
})

function formulaire (){
     let userName = inputName.addEventListener('input', function(e){
          inputName.value
      });
       let userFirstName = null;
       let userAdress = null;
       let userCity = null;
       let userEmail = null;
      
      
      
      
       class contact {
           constructor(firstName, name, adress, city, email){
                this.firstName = firstName;
                this.name = name;
                this.adress = adress;
                this.city = city;
                this.email = email;
           }
      }
      let newContact = new contact (userName, userFirstName, userAdress, userCity, userEmail)
      console.log(newContact);
}