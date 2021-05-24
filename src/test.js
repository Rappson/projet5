
// export const maVariable = "mes données";


/* function formulaire (){
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
} */



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/* var init = {
    method: 'POST',
    header: {
         'accept':'application/json',
         'Content-Type': 'application/json'
    }
}; */

// ///////////////////////////////////////////////////////////////////////////////////////////////

// const panierNuméro = document.querySelector('#numéro');
// const namePanier = document.querySelector('#productNamePanier');
// const pricePanier = document.querySelector('#productPricePanier');
// const quantity = document.querySelector('quantityProductPanier');

/////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
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

 */


     ///////////////////////////////////////////////////////////////////////////////////////////

/*      
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

     fetch(urlBase + 'cameras/'+ 'order/' + targetOrderId)
     .then(Response => Response.json())
     .then(data =>{
          console.log(data);
     })
    }
 */


    ///////////////////////////////////////////////////////////
    

    // name
    const tdName = document.createElement('td')
    tr.appendChild(tdName)
    tdName.setAttribute('id', 'productNamePanier')
    tdName.innerHTML = lsElement.name

    // quantity
    const tdQuantite = document.createElement('td')
    tr.appendChild(tdQuantite)
    tdQuantite.setAttribute('id', 'productQuantityPanier')
    tdQuantite.innerHTML = lsElement.quantity

    // price 
    const tdPrice = document.createElement('td')
    tr.appendChild(tdPrice)
    tdPrice.setAttribute('id', 'productPricePanier')
    tdPrice.innerHTML = lsElement.price * lsElement.quantity + " $"


//////////////////////////////////////////////////////////////////////////////////////

async function getProducts() {
     let productIds = [];
 
     const data = await fetch(urlBase + 'cameras').then(response => response.json())
     
     // mise dans le tableau des ids des produits
     for (i = 0; i < data.length; i++)
         productIds.push(data[i]._id)
 
     return productIds;
 }
 
 fetch(urlBase + 'cameras')
     .then(response => response.json())
     .then(data => {
         // mise dans le tableau des ids des produits
         for (i = 0; i < data.length; i++) {
             tabProduct.push(data[i]._id)
         }
     })
 