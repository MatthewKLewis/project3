/*
 * Load more DIVs on scroll
 * 
 */


// api url 
const api_url = "https://api.thecatapi.com/v1/images/search";
let img = [];
const grid = document.querySelector('.grid');

let setAttributeOfImage = function(attribute, value) {
    catIMG.setAttribute(attribute, value);
}

//DOM Declarations
let catIMG = document.getElementById("randomCatImage");

// Defining async function 
async function getapi(url, functionX) { 
    
    // Storing response, WHEN IT COMES
    const response = await fetch(url); //FETCH MAKES A RESPONSE
    
    // DATA IS THE RESPONSE, AFTER IT COMES, AFTER IT IS FORMATTED
    img = await response.json(); 
    console.log(img[0].url); //THE IMAGE IS ARRAY ITEM 0 FROM A SERVER RESPONSE, the URL is a PROPERTY
    functionX('src', img[0].url);
}

// Calling the async function
getapi(api_url, setAttributeOfImage);



//START
//Create 8 Grid Elements
for (let i = 0; i < 7; i++) {
    var tempDiv = document.createElement('div')
    tempDiv.classList.add('grid-item')

    grid.appendChild(tempDiv);
}