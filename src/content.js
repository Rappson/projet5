const urlBase = "http://localhost:3000/api/";
let totalTab = [];


// Mes sources index.html
const getPrice = document.querySelectorAll("#price");
const getDescription = document.querySelectorAll("#article-description");
const getTitle = document.querySelectorAll("#article-title");
const getImg = document.querySelectorAll(".img-article");
const imgLinks = document.querySelectorAll("div.card > a");


/////// Panier.js ///////
const addToPanierSelector = document.querySelectorAll('.add-to-panier');
// Pour le button de commande
const submitButton = document.querySelector('.buy');
const submitLink = document.querySelector('#submitBtn')

// Pour la personalisation dans le panier
let tabLense = [];

// Tableau pour la condition pour eviter les erreurs dans le panier
let tabProduct = [];


/////// product.js ///////////

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
var getProductId = searchParams.get('id');
