// Load more grid DIVs on scroll
const api_url = "http://swapi.dev/api/planets/";

let grid = document.querySelector('.grid');
let modal = document.querySelector('.modal')
let moreButton = document.querySelector('#moreButton');

moreButton.addEventListener('click', spawnMorePlanets)
window.addEventListener('scroll', scrollTracker)

let modalName = document.getElementById('modalName');
let modalClimate = document.getElementById('modalClimate');
let modalDiameter = document.getElementById('modalDiameter');
let modalGravity = document.getElementById('modalGravity');
let modalOPeriod = document.getElementById('modalOPeriod');
let modalPopulation = document.getElementById('modalPopulation');
let modalTerrain = document.getElementById('modalTerrain');

let expanded = false;
let totalPlanetsIndex = 0;

async function populateButtonfromAPIinfo(int) { 
    let response = await fetch(api_url + int);
    data = await response.json();

    tempDiv = document.createElement('button');
    tempDiv.appendChild(document.createTextNode(data.name.toLowerCase()));
    tempDiv.classList.add('gridItem');

    tempDiv.aaa = data;

    tempDiv.addEventListener('click', expand);
    tempDiv.addEventListener('click', populateFields);

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

let scrollCounter = 0;
function scrollTracker(e) {
    scrollCounter++;
    if (scrollCounter > 10) {
        spawnMorePlanets();
        scrollCounter = 0;
    }
}

function spawnMorePlanets() {
    totalPlanetsIndex++;
    if (totalPlanetsIndex < 60) populateButtonfromAPIinfo(totalPlanetsIndex);
}

//START ---------------------------------------------------------
//Create Grid Elements


for (let i = 0; i < 8; i++) {
    totalPlanetsIndex++;
    populateButtonfromAPIinfo(i+1);
}