/*const request = require("request");

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
const url = BASE_URL + city;
request(url, function (error, response, body) {
if (error) {
callback(error, null);
} else {
const weatherData = JSON.parse(body);
callback(null, weatherData);
}
});
}

getWeatherData("sousse",(error,data)=>{
    if(!error){
        console.log("Description:"+data.weather[0].description)
        console.log("Tempreture:"+data.main.temp)
        console.log("Humidité:"+data.main.humidity)
    }


})*/
/*const fetch = require("node-fetch"); 

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`;

function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(weatherData => callback(null, weatherData))
        .catch(error => callback(error, null));
}


getWeatherData("Paris", (error, data) => {
    if(!error){
        console.log("Description:"+data.weather[0].description)
        console.log("Tempreture:"+data.main.temp)
        console.log("Humidité:"+data.main.humidity)
    }
});*/
const axios = require("axios"); // Installer avec: npm install axios

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`;

function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    axios.get(url)
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null));
}

getWeatherData("sousse",(error,data)=>{
    if(!error){
        console.log("Description:"+data.weather[0].description)
        console.log("Tempreture:"+data.main.temp)
        console.log("Humidité:"+data.main.humidity)
    }
});