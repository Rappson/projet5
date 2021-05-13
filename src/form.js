
// import maVariable from "test"

// console.log(maVariable);


function test (form, e) {
     e.preventDefault()
     let data = {};

     // recuperation des données utilisateur
     let contact = {}
     contact.firstName = form.firstName.value;
     contact.lastName = form.lastName.value;
     contact.address = form.address.value;
     contact.city = form.city.value + "," + form.zip.value;
     contact.email = form.email.value;


    data = {
         contact: contact,
         products: products // todo à créer
    }

    // post data fetch 
     
     console.log(data);
}

