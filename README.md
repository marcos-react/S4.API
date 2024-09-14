# S4.API Projects

This repository contains three projects built using TypeScript in Visual Studio, showcasing the use of various public APIs. Each project integrates a different API to retrieve jokes, weather data, or Chuck Norris facts.

### APIs Used:

1. [icanhazdadjoke API](https://icanhazdadjoke.com/) - For retrieving random dad jokes.
2. [OpenWeather API](https://api.openweathermap.org/data/2.5/weather) - To get weather data for specific cities like Barcelona.
3. [Chuck Norris API](https://api.chucknorris.io/jokes/random) - For retrieving random Chuck Norris jokes.

## Requirements

- Visual Studio Code or Visual Studio with TypeScript support.
- Node.js and npm installed (for managing dependencies).
- API keys (e.g., from OpenWeather) where applicable.

## Installation

1. Clone the repository:

    $ git clone https://github.com/marcos_react/S4.API.git
    $ cd S4.API

2. Install the necessary dependencies:

    $npm install

3. Install TypeScript in your project: TypeScript 

    $ npm i typescript --save-dev

4. Initialize TypeScript in your project:

    $ npx tsc --init

5. Replace the API placeholders in the code with your actual API keys (for OpenWeather).

## Running the Projects

1. Open the project in Visual Studio or Visual Studio Code.

2. Start the TypeScript compiler:

    $tsc --watch

3. Open the index.html file for each project in the browser to view the results.

4. Make sure that the necessary APIs are accessible from your location.

