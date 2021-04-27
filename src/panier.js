const panier = document.querySelectorAll('.add-to-panier');
const panierNuméro = document.querySelector('#numéro');
const namePanier = document.querySelector('#productNamePanier');
const pricePanier = document.querySelector('#productPricePanier');
const quantity = document.querySelector('quantityProductPanier');

let panierTab = [];

for (i = 0; i < panier.length; i++) {
    panier[i].addEventListener('click', function (e) {
        fetch(urlBase + "cameras/" + getProductId)
            .then(response => response.json())
            .then(data => {
                panierTab.push({ id: i, prix: data.price, name: data.name, quantity: i++ })
                localStorage.setItem(i, data._id)
                console.log(localStorage);
            })

    })
}
