// I Copy this joke
let joke: string = "I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog.";
// HTMLElement for getElementById
let result: HTMLElement | null = document.getElementById("result");


interface Ivote{
    joke?: string;
    score?: number;
    date?: string;  // iso format
}

const reportJoke: Array<Ivote> = []; // reportJoke is an array of Ivote interface

const activeJoke: Ivote = {}; // I put ? in variables because are not initiate. Otherwise give an error. 

const scoreAdd = (score: number) => { // function arrow
    activeJoke.joke = joke;
    activeJoke.score = score; // score emoji 
    activeJoke.date = new Date().toISOString(); // ISO format
}

const scoreReset = () =>{
    activeJoke.joke = joke;
    activeJoke.score = 0;
    activeJoke.date = "";
}

console.log(scoreAdd);


if(result){

    result.innerHTML = "\" " + joke + " \"";

}


const getJoke = async (): Promise<any> => {

    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' //JSON format
        }
    });

    return await response.json(); // Return JSON response
}

// DisplayJoke async function 
const displayJoke = async () => {
    const jokeData = await getJoke();
    
    if (result) {
        // Extracting the joke text and updating the innerHTML
        //id: "NRZTSnykqjb"
        //joke: "Where do you take someone who’s been injured in a peek-a-boo accident? To the I.C.U."
        //status: 200
        result.innerHTML = "\" " + jokeData.joke + " \""; // joke variable
        joke = jokeData.joke;
        reportJoke.push({...activeJoke}); // activeJoke is added in reportJoke
        console.log(reportJoke);  // show the console the new value in reportJoke
    }

    //console.log(jokeData); // Logging the joke data

}



