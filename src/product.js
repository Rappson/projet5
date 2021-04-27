

// Mes sources product.html
const productImg = document.querySelector('#product_img');
const productTitle = document.querySelector('#name_product');
const productDescription = document.querySelector('#description_product');
const productPrice = document.querySelector('#price_content');
const productLense = document.querySelectorAll('div.lense > a');


// on recupere l'url en entier
const getUrl = window.location
// on crée un recherche dans l'url pour chercher si il contient un id
var searchParams = new URLSearchParams(getUrl.search);
if (searchParams.has('id')) {
    // récupérer uniquement l'id du produit (sans symbole annonçant le début d'un parametre)
    var getProductId = searchParams.get('id');
    fetch(urlBase + 'cameras/' + getProductId)
        .then(response => response.json())
        .then(data => {

            // incorporation des infos
            productImg.setAttribute('src', data.imageUrl);
            productTitle.innerHTML = data.name;
            productDescription.innerHTML = data.description;
            productPrice.innerHTML = data.price + "$";

            // incorporation des lentilles
            for(var i = 0; i < productLense.length; i++){
                productLense[i].innerHTML = data.lenses[i]

                // mettre en active la personalisation selectionné
                productLense[i].addEventListener('click', (e) => {
                    e.preventDefault();
                    // if ();
                    console.log(this); 
                })
            }
        })
}
