"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// I Copy this joke
let joke = "I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog.";
// HTMLElement for getElementById
let result = document.getElementById("result");
let weather = document.getElementById("weather");
const reportJoke = []; // reportJoke is an array of Ivote interface
const activeJoke = {}; // I put ? in variables because are not initiate. Otherwise give an error. 
const scoreAdd = (score) => {
    activeJoke.joke = joke;
    activeJoke.score = score; // score emoji 
    activeJoke.date = new Date().toISOString(); // ISO format
};
const scoreReset = () => {
    activeJoke.joke = joke;
    activeJoke.score = 0;
    activeJoke.date = "";
};
console.log(scoreAdd);
if (result) {
    result.innerHTML = "\" " + joke + " \"";
}
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' //JSON format
        }
    });
    return yield response.json(); // Return JSON response
});
// DisplayJoke async function 
const displayJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const jokeData = yield getJoke();
    if (result) {
        // Extracting the joke text and updating the innerHTML
        //id: "NRZTSnykqjb"
        //joke: "Where do you take someone who’s been injured in a peek-a-boo accident? To the I.C.U."
        //status: 200
        result.innerHTML = "\" " + jokeData.joke + " \""; // joke variable
        joke = jokeData.joke;
        reportJoke.push(Object.assign({}, activeJoke)); // activeJoke is added in reportJoke
        console.log(reportJoke); // show the console the new value in reportJoke
    }
    //console.log(jokeData); // Logging the joke data
});
// API OpenWeather
const getWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=127e6b274e343ebd140a7a060362a714', {
        headers: {
            'Accept': 'application/json' //JSON format
        }
    });
    return yield response.json(); // Return JSON response
});
// city: Barcelona  and API key= 127e6b274e343ebd140a7a060362a714
// //https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=127e6b274e343ebd140a7a060362a714
//     "coord": {
//         "lon": 2.159,
//         "lat": 41.3888
//     },
//     "weather": [
//         {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 295.28,
//         "feels_like": 294.72,
//         "temp_min": 293.88,
//         "temp_max": 297.1,
//         "pressure": 1020,
//         "humidity": 45,
//         "sea_level": 1020,
//         "grnd_level": 1013
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.66,
//         "deg": 120
//     },
//     "clouds": {
//         "all": 20
//     },
//     "dt": 1726234855,
//     "sys": {
//         "type": 2,
//         "id": 2032131,
//         "country": "ES",
//         "sunrise": 1726205403,
//         "sunset": 1726250676
//     },
//     "timezone": 7200,
//     "id": 3128760,
//     "name": "Barcelona",
//     "cod": 200
// DisplayWeather
const displayWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const weatherData = yield getWeather();
    console.log(weatherData);
    if (weather) {
        weather.innerHTML = `City: ${weatherData.name} - Weather: ${weatherData.weather[0].main} - Details: ${weatherData.weather[0].description}`;
    }
});
window.onload = () => {
    displayWeather();
};
