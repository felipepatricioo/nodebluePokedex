
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  pokemon1 = {
    numero: 001,
    name: "Charmander",
    type: "Fire",
    image:"/imgs/charmander.png",
    descricao: "ele coispe fogo",
    altura:"alto",
    peso:"10",
    categoria:"fogo tb",
    habilidade:"fogo dnovo",
    details: "http://localhost:3000/001"
  },
  pokemon2 = {
    numero: 001,
    name: "Bulbassaur",
    type: "Grass, Poison",
    image:"/imgs/bulbassaur.png",
    descricao: "ele coispe fogo",
    altura:"alto",
    peso:"10",
    categoria:"fogo tb",
    habilidade:"fogo dnovo"
  },
  pokemon3 = {
    numero: 001,
    name: "Pikachu",
    type: "Eletric",
    image: "/imgs/pikachu.png",
    descricao: "ele coispe fogo",
    altura:"alto",
    peso:"10",
    categoria:"fogo tb",
    habilidade:"fogo dnovo"
  }
];

app.get("/register", (req, res) => {
  res.render("../views/register");
});

app.get("/details", (req, res) => {
  let url = pokedex.numero
  res.render("../views/details", {pokedex: pokedex}, url);
});

var pokedexInput = []

app.post("/register", (req, res) => {
let {name} = req.body;
let inputPokemon =  {name: name}.toString()

// pokedex.forEach ( i => {
function search () {
  if (name.toString() == 'Charmander') {
  return pokedexInput.push(pokedex[0])}
  if (name.toString() == 'Bulbasaur') {
  return pokedexInput.push(pokedex[1])}
}
// })
  search()
res.redirect("/");
});

app.get ("/001", (req, res) => {
  res.render("../views/001");
});

app.get("/", (req, res) => {
  res.render("../views/index", {pokedexInput: pokedexInput});
});

app.listen(port, () =>
  console.log(`Server listening in http://localhost:${port}`));
