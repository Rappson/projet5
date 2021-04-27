const panier = document.querySelectorAll('.add-to-panier');
const panierNuméro = document.querySelector('#numéro');
const namePanier = document.querySelector('#productNamePanier');
const pricePanier = document.querySelector('#productPricePanier');
const quantity = document.querySelector('quantityProductPanier');

for (i = 0; i < panier.length; i++) {
    panier[i].addEventListener('click', function (e) {
        
        fetch(urlBase + 'cameras/' + getProductId)
        .then(response => response.json())
        .then(data => {
            let myKey = data._id;
            let cacahuete= JSON.parse(localStorage.getItem(myKey))
            data.quantity =1;
            // new value

            if(localStorage.getItem(myKey) == data._id){
                cacahuete.quantity = data.quatity + 1;
                localStorage.setItem(myKey, JSON.stringify(data)); 
            }else {
                localStorage.setItem(myKey, JSON.stringify(data));
            }
        })
    })
}