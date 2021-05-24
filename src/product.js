function productFocused() {
    if (searchParams.has('id')) {

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
}
productFocused()


for (i = 0; i < addToPanier.length; i++) {
    addToPanier[i].addEventListener('click', function () {

        fetch(urlBase + 'cameras/' + getProductId)
            .then(response => response.json())
            .then(data => {
                const lenseChoose = document.querySelector('.active-user-choose')

                let myKey = data._id;
                data.quantity = 1;
                let cacahuete = JSON.parse(localStorage.getItem(myKey))
                localStorage.setItem(myKey, JSON.stringify(data));


                if (lenseChoose == null) {
                    alert('Aucunes lentilles selectionnées');
                    localStorage.removeItem(myKey)
                } else {
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
