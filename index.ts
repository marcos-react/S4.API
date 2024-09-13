// I Copy this joke
const joke: string = "I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog.";
// HTMLElement for getElementById
let result: HTMLElement | null = document.getElementById("result");

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
    }

    //console.log(jokeData); // Logging the joke data

}



