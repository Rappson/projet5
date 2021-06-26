function getDataToMain() {
    fetch(urlBase + "cameras")
        .then(response => response.json())
        .then(data => {

            // création du contenue des produits
            let container = document.querySelector('div#container-article')
            let divRow = document.createElement('div');
            container.appendChild(divRow)
            divRow.classList.add('row', 'text-center')

            let divCol = document.createElement('div')
            divRow.appendChild(divCol)
            divCol.classList.add('col')

           
            putDataToMain(data, divCol)

        })
}

 // incorporation du prix
 function putDataToMain(data, divCol) {
    for (let i = 0; i < data.length; i++) {

        // mise en place du prix
        const domPrice = data[i].price

        // mise en place de la description
        const domDescr = data[i].description

        // mise en place du titre
        const domName = data[i].name

        // mise en place de l'image
        const domImg = data[i].imageUrl

        let identifiants = data[i]._id;

        const divCard = document.createElement('div')
        divCol.appendChild(divCard)
        divCard.classList.add('card')
        divCard.innerHTML = `
    <a href="product.html?id=${identifiants}"> <img src="${domImg}" alt="" class="card-img-top img-article"></a>
    <div class="card-body">
      <h5 class="card-title" id="article-title">${domName}</h5>
      <p class="card-text"><span id="article-description">${domDescr}</span></p>
      <p class="card-text">$ <span id="price">${domPrice}</span></p>
      <a href="product.html?id=${identifiants}"<button type="button" class="btn btn-outline-primary btn-rounded">En savoir plus</button></a>
    </div>
    `
    }
}



getDataToMain()


