const panier = document.querySelectorAll('.add-to-panier');
const panierNuméro = document.querySelector('#numéro');
const namePanier = document.querySelector('#productNamePanier');
const pricePanier = document.querySelector('#productPricePanier');
const quantity = document.querySelector('quantityProductPanier');

for (i = 0; i < panier.length; i++) {
    panier[i].addEventListener('click', function () {

        fetch(urlBase + 'cameras/' + getProductId)
            .then(response => response.json())
            .then(data => {
                let myKey = data._id;
                data.quantity = 1;
                let cacahuete = JSON.parse(localStorage.getItem(myKey))
                localStorage.setItem(myKey, JSON.stringify(data));


                /* SI ma nouvelle valeur est deja présente dans le localstorage 
                ALORS ajouté +1 a la quantité 
                SINON je crée cette valeur dans le ls
                 */
                if (cacahuete.quantity > 0) {
                    cacahuete.quantity = cacahuete.quantity + 1;
                    localStorage.setItem(myKey, JSON.stringify(cacahuete));
                } else if (cacahuete.quantity == 0 || cacahuete.quantity == null) {
                    cacahuete.quantity = 1
                }
            })
    })
}

// essaie pour creer du html
if(localStorage.length == 0){
    const empty = document.querySelector('#empty')
    const titleEmpty = document.createElement('h3')
    empty.appendChild(titleEmpty)
    titleEmpty.innerHTML = "Vos produits seront ici"
    empty.classList.add('jumbotron', 'text-center')
} else{
for (i = 0; i < localStorage.length; i++) {
    
    // ls pour localstorage
    let mickey = localStorage.key(i);
    let lsElement = JSON.parse(localStorage.getItem(mickey));

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
    cancelBtn.innerHTML = "supprimer"
    cancelBtn.addEventListener('click', function(){
        
    })
}
}
