

// Mes sources product.html
const productImg = document.querySelector('#product_img');
const productTitle = document.querySelector('#name_product');
const productDescription = document.querySelector('#description_product');
const productPrice = document.querySelector('#price_content');
const productLense = document.querySelector('div.lense');


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
            productPrice.innerHTML = data.price + " $";

            // incorporation des lentilles
            for (var i = 0; i < data.lenses.length; i++) {
                // création des liens de personnalisation
                let lenseBtn = document.createElement('a')
                productLense.appendChild(lenseBtn)
                lenseBtn.setAttribute('class', 'list-group-item list-group-item-action');
                lenseBtn.setAttribute('href', '#')
                lenseBtn.innerHTML = data.lenses[i];
                


                // mettre en active la personalisation selectionné
                lenseBtn.addEventListener('click', function (e) {
                    e.preventDefault()
                    if (lenseBtn.classList.contains('active')) {
                        lenseBtn.classList.remove('active', 'active-user-choose')
                        // si il contient la class active je récupere la position de l'element et je la supprime
                        let positionTab = tabLense.indexOf(lenseBtn.textContent);
                        tabLense.splice(positionTab, 1)
                    } else {
                        lenseBtn.classList.add('active', 'active-user-choose')
                        tabLense.push(lenseBtn.textContent)
                        
                    }

                })

            }
        })
}
