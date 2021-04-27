// https://github.com/OpenClassrooms-Student-Center/JWDP5.git


const urlBase = "http://localhost:3000/api/";

// Mes sources index.html
const getPrice = document.querySelectorAll("#price");
const getDescription = document.querySelectorAll("#article-description");
const getTitle = document.querySelectorAll("#article-title");
const getImg = document.querySelectorAll(".img-article");
const imgLinks = document.querySelectorAll("div.card > a");
const containerAllArticles = document.querySelector("#container-articles");

fetch(urlBase + "cameras")
    .then(response => response.json())
    .then(data => {
        
        // incorporation du prix
        for (let i = 0; i < data.length; i++) {

            /* const containerCard = document.createElement("div").classList.add('card');
            const linkImgContainer = document.createElement('a');
            const imgArticle = document.createElement('img').classList.add('card-img-top img-article');
            const cardBody = document.createElement('div').classList.add('card-body');
            const title = document.createElement('h5').classList.add('card-title').setAttribute('id', "article-title")
            const description = document.createElement('p').classList.add('card-text') */


            // mise en place du prix
            const testPrice = data[i].price;

            // mise en place de la description
            const testDescription = data[i].description;

            // mise en place du titre
            const testTitle = data[i].name;

            // mise en place de l'image
            const testImg = data[i].imageUrl;
            getImg[i].setAttribute("src", data[i].imageUrl);

            let identifiants = data[i]._id;
            /* imgLinks[i].setAttribute('id', identifiants);
            imgLinks[i].setAttribute('href', `product.html?id=${identifiants}`) */

            containerAllArticles.innerHTML = `<div class="card">

            <a href="product.html?id=${identifiants}" id="${identifiants}"> <img src="${testImg}" alt="" class="card-img-top img-article"></a>
  
            <div class="card-body">
              <h5 class="card-title" id="article-title">${testTitle}</h5>
              <p class="card-text"><span id="article-description">${testDescription}</span></p>
              <p class="card-text">$ <span id="price"> ${testPrice}</span></p>
              <a href="product.html?id=${identifiants}"><button type="button" class="btn btn-outline-primary btn-rounded">En savoir plus</button></a>
            </div>
  
            
  
          </div>`

        }


    })
    .catch((e) => {
        if(TypeError == undefined){
            console.error('impossible de charger la valeur');
        }
    })

/*     <div class="card">

          <a href=""> <img src="" alt="" class="card-img-top img-article"></a>

          <div class="card-body">
            <h5 class="card-title" id="article-title">Premier article</h5>
            <p class="card-text"><span id="article-description">description</span></p>
            <p class="card-text">$ <span id="price"> price</span></p>
          </div>

          <a href=""><button type="button" class="btn btn-outline-primary btn-rounded">En savoir plus</button></a>

        </div> */