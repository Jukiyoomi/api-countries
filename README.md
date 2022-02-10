# REST Countries API Challenge With Svelte

## Installation

This repo is a simple template using Vitejs. It helps me to have a quick setup of project when coding.

1. `npm i` => Install all dependencies
2. `npm run watch` => Generate .css files
3. `npm run dev -- --open` => Open In Browser

---

## Explanation

In this project, you have to fetch data from an API which gives informations about all countries and create your app around that. You can also see details of a country by clicking on his name.

---

### Steps

1. The first difficulty was that the pattern is not the same for all the objects. So I had to use things like `Object.keys()` or **optional chaining** (`Object?.property`) in order to create my own pattern for every country.

2. I just added routes for when you want details of a country. I tried packages like [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) or [svelte-routing](https://github.com/EmilTholin/svelte-routing). But I did not know how to make it work, so I dis a simple routing.

3. Another difficulty was to create the filters like by region or by name. I completely forgot how to make it.

4. Try to get names of border countries with their FIFA code. This step is partially done because I can't get all border countries. For that, I loop through countries fifa and compare them to border countries codes. If true, return country name.

---

### What I learned

This project is my first using SvelteKit. It was difficult the first time to know how to get date from children components and send them to another child component.The routing logic of svelte is really simple and easy to use. I replaced my old `fetch` by some axios code.
