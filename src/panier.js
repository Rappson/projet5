const panier = document.querySelectorAll('.add-to-panier');
const panierNuméro = document.querySelector('#numéro');
const namePanier = document.querySelector('#productNamePanier');
const pricePanier = document.querySelector('#productPricePanier');
const quantity = document.querySelector('quantityProductPanier');
// Pour le button de commande
const submitButton = document.querySelector('.buy');
// Pour la personalisation dans le panier
let tabLense = [];


for (i = 0; i < panier.length; i++) {
    panier[i].addEventListener('click', function () {

        fetch(urlBase + 'cameras/' + getProductId)
            .then(response => response.json())
            .then(data => {
                const lenseTest = document.querySelector('.active-user-choose')

                let myKey = data._id;
                data.quantity = 1;
                let cacahuete = JSON.parse(localStorage.getItem(myKey))
                localStorage.setItem(myKey, JSON.stringify(data));


                // console.log(lenseTest);
                // console.log(localStorage.getItem(myKey));
                if (lenseTest == null) {
                    alert('Aucunes lentilles selectionnées')
                }else{
                    console.log(tabLense);
                    
                    
                    cacahuete.lenses = JSON.stringify(tabLense)
                }
                if (cacahuete.quantity > 0) {
                    cacahuete.quantity = cacahuete.quantity + 1;
                    localStorage.setItem(myKey, JSON.stringify(cacahuete));

                } else if (cacahuete.quantity == 0 || cacahuete.quantity == null) {
                    cacahuete.quantity = 1;
                }

            })
    })
}

// mise en place de l'affichage des produits dans le panier
if (localStorage.length === 0) {
    // si il n'y a aucun produit dans le panier
    const empty = document.querySelector('#empty')
    const titleEmpty = document.createElement('h3')
    empty.appendChild(titleEmpty)
    titleEmpty.innerHTML = "Vos produits seront ici"
    empty.classList.add('jumbotron', 'text-center')
    submitButton.classList.add('disabled')
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
    });
} else {
    // si il y a des produits dans le panier
    let totalTab = [];
    let sum = 0;
    let total = document.querySelector('#total')

    for (i = 0; i < localStorage.length; i++) {

        // DEFINITION : ls veut dire localstorage
        let myKeys = localStorage.key(i);
        let lsElement = JSON.parse(localStorage.getItem(myKeys));

        const table = document.querySelector('table');
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const tr = document.createElement('tr')
        tbody.appendChild(tr)

        // number
        const th = document.createElement('th')
        tr.appendChild(th)
        th.setAttribute("id", "numero")
        th.innerHTML = i + 1

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

        // cancel button
        const cancelBtn = document.createElement('button')
        tr.appendChild(cancelBtn)
        cancelBtn.innerHTML = "Supprimer"
        cancelBtn.setAttribute('data-id', lsElement._id)
        cancelBtn.addEventListener('click', function () {
            let remove = cancelBtn.dataset.id;
            localStorage.removeItem(remove)
            let head = document.querySelector('head')
            let autoRefresh = document.createElement("meta")
            head.appendChild(autoRefresh)
            autoRefresh.setAttribute('http-equiv', 'refresh')
            autoRefresh.setAttribute('content', '1; url=panier.html')
        })

        // prix total
        totalTab.push(lsElement.price * lsElement.quantity);
    }
    for (i = 0; i < totalTab.length; i++) {
        sum = sum + totalTab[i]
    }
    total.innerHTML = `Total : ${sum} $`
}

