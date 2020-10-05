/*
 * Load more grid DIVs on scroll
 * 
 */

const api_url = "http://swapi.dev/api/planets/";

let grid = document.querySelector('.grid');
let modal = document.querySelector('.modal')
let modalName = document.getElementById('modalName');
let modalClimate = document.getElementById('modalClimate');
let modalDiameter = document.getElementById('modalDiameter');
let modalGravity = document.getElementById('modalGravity');
let modalOPeriod = document.getElementById('modalOPeriod');
let modalPopulation = document.getElementById('modalPopulation');
let modalTerrain = document.getElementById('modalTerrain');

let expanded = false;

async function populateButtonfromAPIinfo() { 
    // Storing response, WHEN IT COMES
    const response = await fetch(api_url + (Math.floor(Math.random() * 50) + 1)); //FETCH MAKES A RESPONSE
    
    // DATA IS THE RESPONSE, AFTER IT COMES, AFTER IT IS FORMATTED
    data = await response.json();

    //Set up the button
    tempDiv = document.createElement('button');
    tempDiv.appendChild(document.createTextNode(data.name.toLowerCase()));
    tempDiv.classList.add('gridItem');

    //Cheeky data smuggling
    tempDiv.aaa = data;

    //Add click behavior to the button which expands the modal
    tempDiv.addEventListener('click', expand);
    tempDiv.addEventListener('click', populateFields);

    //Put the button into the parent grid
    grid.appendChild(tempDiv);
}

function expand() {
    grid.classList.toggle('transparent');
    modal.classList.toggle('hidden');
}

function populateFields() {
    modalName.innerText = this.aaa.name.toLowerCase();
    modalClimate.innerText = this.aaa.climate
    modalDiameter.innerText = this.aaa.diamter
    modalGravity.innerText = this.aaa.gravity
    modalOPeriod.innerText = this.aaa.orbital_period
    modalPopulation.innerText = this.aaa.population
    modalTerrain.innerText = this.aaa.terrain;
}

//START ---------------------------------------------------------
//Create Grid Elements
for (let i = 0; i < 8; i++) {
    //create button with name and data from API and add it to 'grid'
    populateButtonfromAPIinfo();
}