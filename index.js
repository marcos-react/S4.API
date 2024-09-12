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
const joke = "I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog.";
// HTMLElement for getElementById
let result = document.getElementById("result");
if (result) {
    result.innerHTML = joke;
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
        result.innerHTML = jokeData.joke; // joke variable
    }
    //console.log(jokeData); // Logging the joke data
});
