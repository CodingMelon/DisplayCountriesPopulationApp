'use strict';
/*
Create an app that contains the below data about each country. Create a 
function that takes a number and displays countries with a population above
that number. 

+-----------------+------------+------------+--------------+---------------+
| name            | continent  | area       | population   | gdp           |
+-----------------+------------+------------+--------------+---------------+
| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
| Albania         | Europe     | 28748      | 2831741      | 12960000      |
| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
| Andorra         | Europe     | 468        | 78115        | 3712000       |
| Angola          | Africa     | 1246700    | 20609294     | 100990000     |
+-----------------+------------+------------+--------------+---------------+



somefunction(78115)
*/
(function() {

let countriesArr = [
    {
        name: 'Afghanistan',
        continent: 'Asia',
        area: 652230,
        population: 25500100,
        gdp: 20343000
    },
    {
        name: 'Albania',
        continent: 'Europe',
        area: 28748,
        population: 2831741,
        gdp: 12960000
    },
    {
        name: 'Algeria',
        continent: 'Africa',
        area: 2381741,
        population: 37100000,
        gdp: 188681000 
    },
    {
        name: 'Andorra',
        continent: 'Europe',
        area: 468,
        population: 78115,
        gdp: 3712000
    },
    {
        name: 'Angola',
        continent: 'Africa',
        area: 1246700,
        population: 20609294,
        gdp: 100990000
    }
];


let countriesForm = document.getElementById("countries-form");
let numPopulation = document.getElementById("population-input");
let countriesP = document.getElementById("countries-p");

function displayCountries(num){
    for (let i = 0; i < countriesArr.length; i++){
        if (countriesArr[i].population > num){
            countriesP.innerHTML = countriesP.innerHTML + '<br>' + countriesArr[i].name;
            console.log(countriesArr[i].name);
        }
    }
}

countriesForm.addEventListener('submit', function(){
    event.preventDefault();
    console.log(countriesArr);
    console.log(numPopulation.value);
    countriesP.innerHTML = '';
    countriesP.innerHTML += 'Countries: ';
    displayCountries(numPopulation.value);
});    

})();