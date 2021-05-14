
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
     contact.city = form.city.value/*  + "," + form.zip.value */;
     contact.email = form.email.value;

     let products = [];
     for ( let i = 0; i < localStorage.length; i++){
          products.push(localStorage.key(i))
     }

    order = {
         contact: contact,
         products: products // todo à créer
    }
    var init = {
         method: 'post',
         body: JSON.stringify(order)
    }
    // post data fetch 
     fetch(urlBase + "cameras/"+ "order", init)
     
     console.log(init);
}

