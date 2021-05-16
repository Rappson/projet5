
// import maVariable from "test"

// console.log(maVariable);


function form(form, e) {
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
     for (let i = 0; i < localStorage.length; i++) {
          products.push(localStorage.key(i))
     }

     order = {
          contact: contact,
          products: products // todo à créer
     }
     var init = {
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(order)
     }
     // post data fetch 
     fetch(urlBase + "cameras/" + "order", init)
     .then(Response => Response.json())
     .then(data => {
          // target de la div de remerciement
          let congrat = document.querySelector('#order-congrat')
          if (congrat.classList.contains ("disabled")){
               congrat.classList.replace('disabled', 'congrat-active')
               let orderIdCongrat = document.createElement('a')
               orderIdCongrat.classList.add('congrat-content')
               orderIdCongrat.setAttribute('href', `targetOrder.html?orderId= ${data.orderId}`)
               congrat.appendChild(orderIdCongrat)
               orderIdCongrat.innerHTML = 'Numéro de commande : ' + data.orderId
          }
          console.log(data);

     })
}

     var searchId = new URLSearchParams(window.location.search)
    if (searchId.has('orderId')){
     var targetOrderId = searchId.get('orderId')
     fetch(urlBase + 'cameras/'+ 'order/' + targetOrderId)
     .then(Response => Response.json())
     .then(data =>{
          console.log(data);
     })
    }
