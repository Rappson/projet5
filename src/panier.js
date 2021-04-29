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
            data.quantity = 1;
            let cacahuete= JSON.parse(localStorage.getItem(myKey))
            localStorage.setItem(myKey, JSON.stringify(data));

            
            /* SI ma nouvelle valeur est deja présente dans le localstorage 
            ALORS ajouté +1 a la quantité 
            SINON je crée cette valeur dans le ls
             */
            if(cacahuete.quantity > 0 ){
                cacahuete.quantity = cacahuete.quantity + 1;
                localStorage.setItem(myKey, JSON.stringify(cacahuete)); 
            }else if (cacahuete.quantity == 0 || cacahuete.quantity == null){
                cacahuete.quantity = 1
            }
        })
    })
}

