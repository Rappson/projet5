
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
               if (congrat.classList.contains("disabled")) {
                    congrat.classList.replace('disabled', 'congrat-active')
                    let orderIdCongrat = document.createElement('a')
                    orderIdCongrat.classList.add('congrat-content')
                    orderIdCongrat.setAttribute('href', `targetOrder.html?orderId=${data.orderId}`)
                    congrat.appendChild(orderIdCongrat)
                    orderIdCongrat.innerHTML = 'Numéro de commande : ' + data.orderId
               }
               localStorage.clear()
               localStorage.setItem(data.orderId, JSON.stringify(data))

          })
}


// afffichage de la commande

let orderContent = document.querySelector('.order-content')


var searchId = new URLSearchParams(window.location.search)
if (searchId.has('orderId')) {
     var targetOrderId = searchId.get('orderId')

     // mise en place du texte d'acceuil
     let jumbotronId = document.createElement('div')
     orderContent.appendChild(jumbotronId)
     jumbotronId.classList.add('jumbotron')
     jumbotronId.innerHTML = `Résumé de la commande n° <span class='h3'>${targetOrderId}</span>`

     // recuperation des données du ls
     var lsKeyOrder = JSON.parse(localStorage.getItem(targetOrderId))
     var targetProducts = lsKeyOrder.products
     console.log(lsKeyOrder);

     // creation du container des produits
     let productContainer = document.createElement('div')
     orderContent.appendChild(productContainer)
     productContainer.classList.add('row')

     for (let product of targetProducts) {
          let divProducts = document.createElement('div')
          productContainer.appendChild(divProducts)
          divProducts.classList.add('row')
          divProducts.innerHTML = `<a href='product.html?${product._id}'> <img src='${product.imageUrl}' alt='image du produit' width='10%'></img> </a>
           <p class='produt_order_name'>${product.name}</p>
            &nbsp;&nbsp;&nbsp; 
            <p>${product.price} $</p>`

     }
}
