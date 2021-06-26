function form(form, e) {
     e.preventDefault()

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
          products: products
     }
     var init = {
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(order)
     }
    
          postDataCongrat(init)

}

function postDataCongrat(init) {
     let congrat = document.querySelector('#order-congrat')


     // post data fetch 
     
     if (localStorage.length > 0){
          fetch(urlBase + "cameras/" + "order", init)
          .then(Response => Response.json())
          .then(data => {

               // target de la div de remerciement

               function congratulationMessage() {
                    if (congrat.classList.contains("disabled")) {
                         congrat.classList.replace('disabled', 'congrat-active')

                         // mise en place du total dans le menu de remerciement
                         let totalOrder = document.createElement('p')
                         let sumOrder = 0;
                         for (i = 0; i < localStorage.length; i++) {
                              let lstarget = localStorage.key(i)
                              let targetJson = JSON.parse(localStorage.getItem(lstarget))
                              let elementTotal = targetJson.price * targetJson.quantity
                              sumOrder = sumOrder + elementTotal
                         }
                         congrat.appendChild(totalOrder)
                         totalOrder.innerHTML = `Total: ${sumOrder} $`
                         totalOrder.classList.add('congrat-content', 'h3')

                         let orderIdCongrat = document.createElement('a')
                         orderIdCongrat.classList.add('congrat-content')
                         orderIdCongrat.setAttribute('href', `#`)
                         congrat.appendChild(orderIdCongrat)
                         orderIdCongrat.innerHTML = 'Numéro de commande : ' + data.orderId

                    }
               }
               congratulationMessage();

               localStorage.clear()

          })
     }else{
          let form = document.querySelector('.user-tab');
          let answerError = document.createElement('p');
          answerError.innerHTML = `Une erreur est survenue ! Veuillez retourner à la page d'accueil`;
          answerError.setAttribute('style', 'color: red');

          let linkToMain = document.createElement('a');
          linkToMain.setAttribute('href', 'index.html');
          linkToMain.innerHTML =  `Cliquez ici pour retourner à l'accueil`;
          linkToMain.setAttribute('style', 'color: red; font-weight: bold')

          form.appendChild(answerError);
          form.appendChild(linkToMain);


     }
}