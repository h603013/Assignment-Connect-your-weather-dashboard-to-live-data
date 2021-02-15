//Create a variable and store a new XMLHttpRequest 
//Apply the XMLHttpRequest open("GET", "results.json", true) method to the variable
//Apply the XMLHttpRequest send() method to the variable
let output = '';

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let data = this.responseText;
        data = JSON.parse(data);
        console.log(data);
        document.querySelector('#temp').innerHTML = data.current.temp;
        document.querySelector('#weather').innerHTML = data.current.weather;
        document.querySelector('#temp').innerHTML = data.forecasted.weather;
        document.querySelector('#temp').innerHTML = data.forecasted.weather;

        for(let i = 0; i < data.daily.length; i++) {
            output +=  `<li>${data.daily[i].temp}<br>${data.daily[i].weather}</li>`;
        }

        document.querySelector('#forecast').innerHTML = output;
    }
}
console.log(xhttp);
xhttp.open('GET', ˋapi.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1d3f1eda5fc4813aba392d6d57361b4bˋ, true);
xhttp.send();

//fetch api
window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const api = ˋapi.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1d3f1eda5fc4813aba392d6d57361b4bˋ;
     
        fetch(url)
       .then(function(response) {
        return response.json();
        })
       .then(function(data) {
        return updateUI(data);
        })
        .catch(function(error) {
        console.log(error);
    })
})

const lat = '23.6978',
    long = '120.9605',
    api = '1d3f1eda5fc4813aba392d6d57361b4b',
    unit = 'imperial',
    url = ˋapi.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1d3f1eda5fc4813aba392d6d57361b4bˋ;

console.log(url);

function updateUI(data) {
    console.log(data);
}


});