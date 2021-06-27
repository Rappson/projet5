function productFocused() {
    if (searchParams.has('id')) {
        console.log(getProductId);

        fetch(urlBase + 'cameras/' + getProductId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let containerProduct = document.querySelector('.container-product')

                if (data.imageUrl == undefined ||
                    data.name == undefined ||
                    data.price == undefined) {
                    let errorProduct = document.createElement('p');
                    let linkToMain = document.createElement('a');
                    errorProduct.innerHTML = "une erreur est survenue ! Merci de retourner à l'accueil";
                    linkToMain.innerHTML = "Cliquez ici pour retourner à l'accueil";
                    linkToMain.setAttribute('href', 'index.html');

                    containerProduct.appendChild(errorProduct)
                    containerProduct.appendChild(linkToMain)
                } else {
                    containerProduct.innerHTML = `
                <img src="${data.imageUrl}" alt="" id="product_img" width="70%">
                <!-- infos -->
                <h1 id="name_product">${data.name}</h1>
                <p id="description_product">${data.description}</p>
                <p id="price_content"><span id="price_product">${data.price} $</span></p>
                <!-- lenses -->
                <div class="list-group lense lenses-container">
        
                </div>`;
                    


                    // incorporation des lentilles
                    for (var i = 0; i < data.lenses.length; i++) {
                        // création des liens de personnalisation
                        const productLense = document.querySelector('div.lense');
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
                                let positionTab = tabLense.indexOf(lenseBtn.textContent);
                                tabLense.splice(positionTab, 1)
                            } else {
                                lenseBtn.classList.add('active', 'active-user-choose')
                                tabLense.push(lenseBtn.textContent)

                            }
                        })
                    }
                }
            })
    }
}

function putProductOnCart() {
    let containerBtn = document.querySelector('.container-btn-submit');
    let btnAddToCart = document.createElement('button');
    btnAddToCart.setAttribute('type', 'submit');
    btnAddToCart.setAttribute('class', 'btn btn-outline-primary btn-rounded add-to-panier');
    btnAddToCart.innerHTML = 'Ajouter au panier'
    containerBtn.appendChild(btnAddToCart);


    for (i = 0; i < addToPanierSelector.length; i++) {
        addToPanierSelector[i].addEventListener('click', function () {

            fetch(urlBase + 'cameras/' + getProductId)
                .then(response => response.json())
                .then(data => {

                    let myKey = data._id;
                    const lenseChoose = document.querySelector('.active-user-choose')

                    data.quantity = 1;
                    data.selectedLenses = JSON.stringify(tabLense)
                    let cacahuete = JSON.parse(localStorage.getItem(myKey))
                    localStorage.setItem(myKey, JSON.stringify(data));

                    if (lenseChoose == null) {
                        alert('Aucunes lentilles selectionnées');
                        localStorage.removeItem(myKey)
                    };

                    if (cacahuete.quantity == 0 || cacahuete.quantity == null) {
                        cacahuete.quantity = 1;
                    } else if (cacahuete.quantity > 0) {
                        cacahuete.quantity = cacahuete.quantity + 1;
                        localStorage.setItem(myKey, JSON.stringify(cacahuete));

                    }
                })
        })
    }
}

productFocused()
putProductOnCart()