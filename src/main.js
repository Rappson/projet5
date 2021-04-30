// https://github.com/OpenClassrooms-Student-Center/JWDP5.git


const urlBase = "http://localhost:3000/api/";

// Mes sources index.html
const getPrice = document.querySelectorAll("#price");
const getDescription = document.querySelectorAll("#article-description");
const getTitle = document.querySelectorAll("#article-title");
const getImg = document.querySelectorAll(".img-article");
const imgLinks = document.querySelectorAll("div.card > a");


fetch(urlBase + "cameras")
    .then(response => response.json())
    .then(data => {
        
        // incorporation du prix
        for (let i = 0; i < data.length; i++) {
            // mise en place du prix
            getPrice[i].innerHTML = data[i].price;

            // mise en place de la description
            getDescription[i].innerHTML = data[i].description;

            // mise en place du titre
            getTitle[i].innerHTML = data[i].name;

            // mise en place de l'image
            getImg[i].setAttribute("src", data[i].imageUrl);

            let identifiants = data[i]._id;
            imgLinks[i].setAttribute('id', identifiants);
            imgLinks[i].setAttribute('href', `product.html?id=${identifiants}`)

            let containerArticle = document.querySelector('main-content')
            let divCard = document.createElement('div')
            divCard.classList.add('card')
            containerArticle.appendChild('divCard')
        }


    })
    .catch((e) => {
        if(TypeError == undefined){
            console.error('impossible de charger la valeur');
        }
    })
