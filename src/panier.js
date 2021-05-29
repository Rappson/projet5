let cartEmpty = function (){
    // si il n'y a aucun produit dans le panier
    const empty = document.querySelector('#empty')
    const titleEmpty = document.createElement('h3')
    empty.appendChild(titleEmpty)
    titleEmpty.innerHTML = "Vos produits seront ici"
    empty.classList.add('jumbotron', 'text-center')
    submitButton.innerHTML = "Retour à la boutique";
    submitLink.setAttribute('href', 'index.html')
}


function putproductOnTab(){
    // si il y a des produits dans le panier
    let totalTab = [];
    let sum = 0;
    let total = document.querySelector('#total')

    // modification du lien de redirection vers le formulaire de contact
    submitLink.setAttribute('href', 'form.html');


    for (i = 0; i < localStorage.length; i++) {

        // DEFINITION : ls veut dire localstorage
        let myKeys = localStorage.key(i);
        let lsElement = JSON.parse(localStorage.getItem(myKeys));


        // affichage du panier
        const table = document.querySelector('table');
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const tr = document.createElement('tr')
        tbody.appendChild(tr)

        const lsName = lsElement.name + lsElement.selectedLenses;
        const lsQuantity = lsElement.quantity;
        const lsPrice = lsElement.price * lsElement.quantity + ' $'

        function appendTabElement (element, tabElementId, inner){
            let td = document.createElement(element)
            tr.appendChild(td)
            td.setAttribute('id', tabElementId)
            td.innerHTML = inner
        }
        // number
        appendTabElement('th', 'number', i + 1)

        // name
        appendTabElement('td', 'productNamePanier', lsName);

        // quantity
        appendTabElement('td','productQuantityPanier', lsQuantity);

        // price
        appendTabElement('td','productPricePanier', lsPrice)

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


    // mise en place de l'affichage des produits dans le panier
    if (localStorage.length === 0) {
        cartEmpty()
    } else {
        putproductOnTab()
    }

