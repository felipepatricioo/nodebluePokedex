
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
    name: "Bulbasaur",
    type: "Grass, Poison",
    image:"/imgs/bulbassaur.png",
    descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    altura:"0.7 m",
    peso:"6.9kg",
    categoria:"Seed",
    habilidade:"Overgrow"
  },
  pokemon2 = {
    numero: 002,
    name: "Ivysaur",
    type: "Grass, Poison",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    descricao: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    altura:"1.0 m",
    peso:"13.0 kg",
    categoria:"Seed",
    habilidade:"Overgrow"
  },
  pokemon3 = {
    numero: 003,
    name: "Venusaur ",
    type: "Grass, Poison",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    descricao: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    altura:"2.0 m",
    peso:"100.0 kg",
    categoria:"Seed",
    habilidade:"Overgrow"
  },
  pokemon4 = {
    numero: 004,
    name: "Charmander ",
    type: "Fire",
    image:"/imgs/charmander.png",
    descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura:"0.6 m",
    peso:"8,5kg",
    categoria:"Lizard",
    habilidade:"Blaze"
  },
  pokemon5 = {
    numero: 005,
    name: "Charmeleon ",
    type: "Fire",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    descricao: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    altura:"1.1 m",
    peso:"19.0 kg",
    categoria:"Flame",
    habilidade:"Blaze"
  },
  pokemon6 = {
    numero: 006,
    name: "Charizard ",
    type: "Fire, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    descricao: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    altura:"1.7 m",
    peso:"90.5kg",
    categoria:"Flame",
    habilidade:"Blaze"
  },
  pokemon7 = {
    numero: 007,
    name: "Squirtle ",
    type: "Water",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    altura:"0.5 m",
    peso:"9.0 kg",
    categoria:"Tiny Turtle",
    habilidade:"Torrent"
  },
  pokemon8= {
    numero: 08,
    name: "Wartortle",
    type: "Water",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    descricao: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    altura:"1.0 m",
    peso:"22.5 kg",
    categoria:"Turtle",
    habilidade:"Torrent"
  },
  pokemon9 = {
    numero: 09,
    name: "Blastoise ",
    type: "Water",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    descricao: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    altura:"1.6 m",
    peso:"85.5 kg",
    categoria:"Shellfish",
    habilidade:"Torrent"
  },
  pokemon10 = {
    numero: 10,
    name: "Caterpie",
    type: "Bug",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    descricao: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    altura:"0.3 m",
    peso:"2.9kg",
    categoria:"Worm",
    habilidade:"Shield Dust"
  },
  pokemon11 = {
    numero: 11,
    name: "Metapod ",
    type: "Bug",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    descricao: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    altura:"0.7 m",
    peso:"9.9kg",
    categoria:"Cocoon",
    habilidade:"Shed Skin"
  },
  pokemon12 = {
    numero: 12,
    name: "Butterfree ",
    type: "Bug, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    descricao: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    altura:"1.1 m",
    peso:"32 kg",
    categoria:"Butterlfy",
    habilidade:"Compound Eyes"
  },
  pokemon13 = {
    numero: 13,
    name: "Weedle ",
    type: "Bug, Poison",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    descricao: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    altura:"0.3 m",
    peso:"3.2 kg",
    categoria:"Hairy Bug",
    habilidade:"Shield Dust"
  },
  pokemon14 = {
    numero: 14,
    name: "Kakuna ",
    type: "Bug, Poison",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    descricao: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    altura:"0.6 m",
    peso:"10 kg",
    categoria:"Cocoon",
    habilidade:"Shed Skin"
  },
  pokemon15 = {
    numero: 15,
    name: "Beedrill",
    type: "Bug, Poison",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    descricao: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    altura:"1 m",
    peso:"29.5 kg",
    categoria:"Poison Bee",
    habilidade:"Swarm"
  },
  pokemon16 = {
    numero: 16,
    name: "Pidgey ",
    type: "Normal, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    descricao: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    altura:"0.3 m",
    peso:"1.8 kg",
    categoria:"Tiny Bird",
    habilidade:"Keen Eye, Tnagled Feet"
  },
  pokemon17 = {
    numero: 17,
    name: "Pidgeotto ",
    type: "Normal, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    descricao: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
    altura:"1.1 m",
    peso:"30 kg",
    categoria:"Bird",
    habilidade:"Keen Eye, Tnagled Feet"
  },
  pokemon18 = {
    numero: 18,
    name: "Pidgeot",
    type: "Normal, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    descricao: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    altura:"1.5 m",
    peso:"39.5 kg",
    categoria:"Bird",
    habilidade:"Keen Eye, Tnagled Feet"
  },
  pokemon19 = {
    numero: 19,
    name: "Rattata ",
    type: "Normal",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    descricao: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
    altura:"0.3 m",
    peso:"3.5 kg",
    categoria:"Mouse",
    habilidade:"Run Away, Guts"
  },
  pokemon20 = {
    numero: 20,
    name: "Raticate ",
    type: "Normal",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    descricao: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
    altura:"0.7 m",
    peso:"18.5 kg",
    categoria:"Mouse",
    habilidade:"Run Away, Guts"
  },
  pokemon21 = {
    numero: 21,
    name: "Spearow",
    type: "Normal, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    descricao: "Inept at flying high. However, it can fly around very fast to protect its territory.",
    altura:"0.3 m",
    peso:"2,0 kg",
    categoria:"Tiny Bird",
    habilidade:"Keen Eye"
  },
  pokemon22 = {
    numero: 22,
    name: "Fearow ",
    type: "Normal, Flying",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    descricao: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
    altura:"1.2 m",
    peso:"38 kg",
    categoria:"Beak",
    habilidade:"Keen Eye"
  },
  pokemon23 = {
    numero: 23,
    name: "Ekans ",
    type: "Poison",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    descricao: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
    altura:"2 m",
    peso:"6.9kg",
    categoria:"Snake",
    habilidade:"Shed Skin, Intimidate"
  },
  pokemon24 = {
    numero: 24,
    name: "Arbok ",
    type: "Poison",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    descricao: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    altura:"3.5 m",
    peso:"65 kg",
    categoria:"Cobra",
    habilidade:"Shed Skin, Intimidate"
  },
  pokemon25 = {
    numero: 25,
    name: "Pikachu  ",
    type: "Electric ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png ",
    descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy. ",
    altura:"0.4 m",
    peso:"6 kg",
    categoria:"Mouse",
    habilidade:"Static "
  },
  pokemon26 = {
    numero: 26,
    name: "Raichu  ",
    type: "Electric ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png ",
    descricao: "Its long tail serves as a ground to protect itself from its own high-voltage power. ",
    altura:"0.8 m",
    peso:"30 kg",
    categoria:"Mouse ",
    habilidade:"Static "
  },
  pokemon27 = {
    numero: 27,
    name: "Sandshrew  ",
    type: "Ground ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png ",
    descricao: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body. ",
    altura:"0.6 m",
    peso:"12 kg",
    categoria:"Mouse ",
    habilidade:"Sand Veil"
  },
  pokemon28 = {
    numero: 28,
    name: "Sandslash  ",
    type: "Ground ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png ",
    descricao: "The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched. ",
    altura:"1 m",
    peso:"29.5 kg",
    categoria:"Mouse ",
    habilidade:"Sand Veil "
  },
  pokemon29 = {
    numero: 29,
    name: "Nidoran ",
    type: "Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png ",
    descricao: "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators. ",
    altura:"0.4 m",
    peso:" 7 kg",
    categoria:"Poison Pin ",
    habilidade:"Poison Point, Rivalry "
  },
  pokemon30 = {
    numero: 30,
    name: "Nidorina ",
    type: "Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png ",
    descricao: "The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them. ",
    altura:"0.8 m",
    peso:"20 kg",
    categoria:"Poison Pin ",
    habilidade:"Poison Point, Rivalry "
  },
  pokemon31 = {
    numero: 31,
    name: "Nidoqueen  ",
    type: "Poison, Ground ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png ",
    descricao: "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack. ",
    altura:"1.3 m",
    peso:"60 kg",
    categoria:"Drill ",
    habilidade:"Poison Point, Rivalry "
  },
  pokemon32 = {
    numero: 32,
    name: "Nidoran ",
    type: "Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png ",
    descricao: "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears. ",
    altura:"0.5 m",
    peso:"9 kg",
    categoria:"Poison Pin ",
    habilidade:"Poison Point, Rivalry "
  },
  pokemon33 = {
    numero: 33,
    name: "Nidorino  ",
    type: "Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png ",
    descricao: "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone. ",
    altura:"0.9 m",
    peso:"19.5 kg",
    categoria:"Poison Pin ",
    habilidade:"Poison Point, Rivalry "
  },
  pokemon34 = {
    numero: 34,
    name: "Nidoking  ",
    type: "Poison, Ground ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png ",
    descricao: "When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down. ",
    altura:"1.4 m",
    peso:"62 kg",
    categoria:"Drill ",
    habilidade:"Poison Point, Rivalry "
  },
  pokemon35 = {
    numero: 35,
    name: "Clefairy  ",
    type: "Fairy ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png ",
    descricao: "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon. ",
    altura:"0.6 m",
    peso:"7.5 kg",
    categoria:"Fairy ",
    habilidade:"Cute Charm, Magic Guard "
  },
  pokemon36 = {
    numero: 36,
    name: "Clefable  ",
    type: "Fairy ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png ",
    descricao: "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people. ",
    altura:"1.3 m",
    peso:"40 kg",
    categoria:"Fairy ",
    habilidade:"Cute Charm, Magic Guard "
  },
  pokemon37 = {
    numero: 37,
    name: "Vulpix  ",
    type: "Fire ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png ",
    descricao: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted. ",
    altura:"0.6 m",
    peso:"9.9 kg",
    categoria:"Fox ",
    habilidade:"Flash Fire "
  },
  pokemon38 = {
    numero: 38,
    name: "Ninetales  ",
    type: "Fire ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png ",
    descricao: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers. ",
    altura:" 1.1 m",
    peso:"19.9 kg",
    categoria:"Fox ",
    habilidade:"Flash Fire "
  },
  pokemon39 = {
    numero: 39,
    name: "Jigglypuff  ",
    type: "Normal, Fairy ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png ",
    descricao: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep. ",
    altura:"0.5 m",
    peso:"5.5 kg",
    categoria:"Baloon ",
    habilidade:"Cute Charm, Competitive "
  },
  pokemon40 = {
    numero: 40,
    name: "Wigglytuff  ",
    type: "Normal, Fairy ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png ",
    descricao: "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them. ",
    altura:"1 m",
    peso:"12 kg",
    categoria:"Baloon ",
    habilidade:"Cute Charm, Competitive "
  },
  pokemon41 = {
    numero: 41,
    name: "Zubat ",
    type: "Poison, Flying ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png ",
    descricao: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill. ",
    altura:"0.8 m",
    peso:"7.5 kg",
    categoria:"Bat ",
    habilidade:"Inner Focus "
  },
  pokemon42 = {
    numero: 42,
    name: "Golbat  ",
    type: "Poison, Flying ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png ",
    descricao: "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered. ",
    altura:"1.6 m",
    peso:"55 kg",
    categoria:"Bat ",
    habilidade:"Inner Focus "
  },
  pokemon43 = {
    numero: 43,
    name: "Oddish  ",
    type: "Grass, Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png ",
    descricao: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds. ",
    altura:"0.5 m",
    peso:"5.4 kg",
    categoria:"Weed ",
    habilidade:"Chlorophyll "
  },
  pokemon44 = {
    numero: 44,
    name: "Gloom  ",
    type: "Grass, Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png ",
    descricao: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
    altura:"0.8 m",
    peso:"8.6 kg",
    categoria:"Weed ",
    habilidade:"Chlorophyll "
  },
  pokemon45 = {
    numero: 45,
    name: "Vileplume  ",
    type: "Grass, Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png ",
    descricao: "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen. ",
    altura:"1.2 m",
    peso:"18.6 kg",
    categoria:"Flower ",
    habilidade:"Chlorophyll "
  },
  pokemon46 = {
    numero: 46,
    name: "Paras  ",
    type: "Bug, Grass ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png ",
    descricao: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition. ",
    altura:"0.3 m",
    peso:"5.4 kg",
    categoria:"Mushroom ",
    habilidade:"Effect Spore, Dry Skin "
  },
  pokemon47 = {
    numero: 47,
    name: "Parasect  ",
    type: "Bug, Grass ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png ",
    descricao: "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking. ",
    altura:"1 m",
    peso:"29.5 kg",
    categoria:"Mushroom ",
    habilidade:"Effect Spore, Dry Skin "
  },
  pokemon48 = {
    numero: 48,
    name: "Venonat   ",
    type: "Bug, Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    descricao: "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
    altura:"1 m",
    peso:"30 kg",
    categoria:"Insect ",
    habilidade:"Compound Eyes, Tinted Lens"
  },
  pokemon49 = {
    numero: 49,
    name: "Venomoth ",
    type: "Bug, Poison ",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    descricao: "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
    altura:"1,5 m",
    peso:"12.5 kg",
    categoria:"Poison Moth ",
    habilidade:"Shield Dust, Tinted Lens"
  },
  pokemon50 = {
    numero: 50,
    name: "Diglett ",
    type: "Ground",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    altura:"0.2 m",
    peso:"0.8 kg",
    categoria:"Mole ",
    habilidade:"Sand Veil, Arena Trap"
  },
];

app.get("/register", (req, res) => {
  res.render("../views/register");
});

app.get("/details", (req, res) => {
  res.render("../views/details", {pokedex: pokedex});
});

var pokedexInput = []

app.post("/register", (req, res) => {
let {name} = req.body;

function search () {
  if ((name == 'bulbasaur') || (name == 1) ) {
  return pokedexInput.push(pokedex[0])
}else if ((name == 'ivysaur') || (name == 2)) {
  return pokedexInput.push(pokedex[1])
}else if ((name == 'venusaur') || (name ==3)) {
  return pokedexInput.push(pokedex[2])
}else if ((name == 'charmander') || (name == 4)) {
  return pokedexInput.push(pokedex[3])
}else if ((name == 'charmeleon') || (name ==5)) {
  return pokedexInput.push(pokedex[4])
}else if ((name == 'charizard') || (name ==6)) {
  return pokedexInput.push(pokedex[5])
}else if ((name == 'squirtle') || (name == 7)) {
  return pokedexInput.push(pokedex[6])
}else if ((name == 'wartotle') || (name ==8)) {
  return pokedexInput.push(pokedex[7])
}else if ((name == 'blastoise') || (name ==9)) {
  return pokedexInput.push(pokedex[8])
}else if ((name == 'caterpie') || (name ==10)) {
  return pokedexInput.push(pokedex[9])
}else if ((name == 'metapod') || (name ==11)) {
  return pokedexInput.push(pokedex[10])
}else if ((name == 'butterfree') || (name ==12)) {
  return pokedexInput.push(pokedex[11])
}else if ((name == 'weedle') || (name ==13)) {
  return pokedexInput.push(pokedex[12])
}else if ((name == 'kakuna') || (name ==14)) {
  return pokedexInput.push(pokedex[13])
}else if ((name == 'beedrill') || (name ==15)) {
  return pokedexInput.push(pokedex[14])
}else if ((name == 'pidgey') || (name ==16)) {
  return pokedexInput.push(pokedex[15])
}else if ((name == 'pidgeotto') || (name ==17)) {
  return pokedexInput.push(pokedex[16])
}else if ((name == 'pidgeot') || (name ==18)) {
  return pokedexInput.push(pokedex[17])
}else if ((name == 'rattata') || (name ==19)) {
  return pokedexInput.push(pokedex[18])
}else if ((name == 'raticate')|| (name ==20)) {
  return pokedexInput.push(pokedex[19])
}else if (name == 'spearow'|| (name ==21)) {
  return pokedexInput.push(pokedex[20])
}else if ((name == 'fearow')|| (name ==22)) {
  return pokedexInput.push(pokedex[21])
}else if ((name == 'ekans') || (name ==23)) {
  return pokedexInput.push(pokedex[22])
}else if ((name == 'arbok')|| (name ==24)) {
  return pokedexInput.push(pokedex[23])
}else if ((name == 'pikachu')|| (name ==25)) {
  return pokedexInput.push(pokedex[24])
}else if ((name == 'raichu') || (name ==26)) {
  return pokedexInput.push(pokedex[25])
}else if ((name == 'sandshrew') || (name ==27)) {
  return pokedexInput.push(pokedex[26])
}else if ((name == 'sandslash') || (name ==28)) {
  return pokedexInput.push(pokedex[27])
}else if ((name == 'nidoran')|| (name ==29)) {
  return pokedexInput.push(pokedex[28])
}else if ((name == 'nidorina') || (name ==30)) {
  return pokedexInput.push(pokedex[29])
}else if ((name == 'nidoqueen')|| (name ==31)) {
  return pokedexInput.push(pokedex[30])
}else if ((name == 'nidoran') || (name ==32)) {
  return pokedexInput.push(pokedex[31])
}else if ((name == 'nidorino')|| (name ==33)) {
  return pokedexInput.push(pokedex[32])
}else if ((name == 'nidoking') || (name ==34)) {
  return pokedexInput.push(pokedex[33])
}else if ((name == 'clefairy') || (name ==35)) {
  return pokedexInput.push(pokedex[34])
}else if ((name == 'clefable') || (name ==36)) {
  return pokedexInput.push(pokedex[35])
}else if ((name == 'vulpix') || (name ==37)) {
  return pokedexInput.push(pokedex[36])
}else if ((name == 'ninetales') || (name ==38)) {
  return pokedexInput.push(pokedex[37])
}else if ((name == 'jigglypuff')|| (name ==39)) {
  return pokedexInput.push(pokedex[38])
}else if ((name == 'wigglytuff') || (name ==40)) {
  return pokedexInput.push(pokedex[39])
}else if ((name == 'zubat') || (name ==41)) {
  return pokedexInput.push(pokedex[40])
}else if ((name == 'golbat') || (name == 42)) {
  return pokedexInput.push(pokedex[41])
}else if ((name == 'oddish')|| (name ==43)) {
  return pokedexInput.push(pokedex[42])
}else if ((name == 'gloom')|| (name == 44)) {
  return pokedexInput.push(pokedex[43])
}else if ((name == 'vileplume')|| (name ==45)) {
  return pokedexInput.push(pokedex[44])
}else if ((name == 'paras')|| (name ==46)) {
  return pokedexInput.push(pokedex[45])
}else if ((name == 'parasect')|| (name ==47)) {
  return pokedexInput.push(pokedex[46])
}else if ((name == 'venonat')|| (name ==48)) {
  return pokedexInput.push(pokedex[47])
}else if ((name == 'venomoth') || (name ==49)) {
  return pokedexInput.push(pokedex[48])
}else if ((name == 'diglett')|| (name ==50)) {
  return pokedexInput.push(pokedex[49])
}else {
  let message = "We only have up to the first 50 Pokémons registered, try inserting a new name or number!"
  return message
}
}
search()

res.redirect("/");
});

app.get ("/details/1", (req, res) => {
  const bulbasaur = pokedex[0]
  res.render("../views/pokemons/1", {bulbasaur: bulbasaur});
});
app.get ("/details/2", (req, res) => {
  const ivysaur = pokedex[1]
  res.render("../views/pokemons/2", {ivysaur: ivysaur});
});
app.get ("/details/3", (req, res) => {
  const venusaur = pokedex[2]
  res.render("../views/pokemons/3", {venusaur: venusaur});
});
app.get ("/details/4", (req, res) => {
  const charmander = pokedex[3]
  res.render("../views/pokemons/4", {charmander: charmander});
});
app.get ("/details/5", (req, res) => {
  const charmeleon = pokedex[4]
  res.render("../views/pokemons/5", {charmeleon: charmeleon});
});
app.get ("/details/6", (req, res) => {
  const charizard = pokedex[5]
  res.render("../views/pokemons/6", {charizard: charizard});
});
app.get ("/details/7", (req, res) => {
  const squirtle = pokedex[6]
  res.render("../views/pokemons/7", {squirtle: squirtle});
});
app.get ("/details/8", (req, res) => {
  const wartortle = pokedex[7]
  res.render("../views/pokemons/8", {wartortle: wartortle});
});
app.get ("/details/9", (req, res) => {
  const blastoise = pokedex[8]
  res.render("../views/pokemons/9", {blastoise: blastoise});
});
app.get ("/details/10", (req, res) => {
  const caterpie = pokedex[9]
  res.render("../views/pokemons/10", {caterpie: caterpie});
});
app.get ("/details/11", (req, res) => {
  const metapod = pokedex[10]
  res.render("../views/pokemons/11", {metapod: metapod});
});
app.get ("/details/12", (req, res) => {
  const butterfree = pokedex[11]
  res.render("../views/pokemons/12", {butterfree: butterfree});
});
app.get ("/details/13", (req, res) => {
  const weedle = pokedex[12]
  res.render("../views/pokemons/13", {weedle: weedle});
});
app.get ("/details/14", (req, res) => {
  const kakuna = pokedex[13]
  res.render("../views/pokemons/14", {kakuna: kakuna});
});
app.get ("/details/15", (req, res) => {
  const beedrill = pokedex[14]
  res.render("../views/pokemons/15", {beedrill: beedrill});
});
app.get ("/details/16", (req, res) => {
  const pidgey = pokedex[15]
  res.render("../views/pokemons/16", {pidgey: pidgey});
});
app.get ("/details/17", (req, res) => {
  const pidgeotto = pokedex[16]
  res.render("../views/pokemons/17", {pidgeotto: pidgeotto});
});
app.get ("/details/18", (req, res) => {
  const pidgeot = pokedex[17]
  res.render("../views/pokemons/18", {pidgeot: pidgeot});
});
app.get ("/details/19", (req, res) => {
  const rattata = pokedex[18]
  res.render("../views/pokemons/19", {rattata: rattata});
});
app.get ("/details/20", (req, res) => {
  const raticate = pokedex[19]
  res.render("../views/pokemons/20", {raticate: raticate});
});
app.get ("/details/21", (req, res) => {
  const spearow = pokedex[20]
  res.render("../views/pokemons/21", {spearow: spearow});
});
app.get ("/details/22", (req, res) => {
  const fearow = pokedex[21]
  res.render("../views/pokemons/22", {fearow: fearow});
});
app.get ("/details/23", (req, res) => {
  const ekans = pokedex[22]
  res.render("../views/pokemons/23", {ekans: ekans});
});
app.get ("/details/24", (req, res) => {
  const arbok = pokedex[23]
  res.render("../views/pokemons/24", {arbok: arbok});
});
app.get ("/details/25", (req, res) => {
  const pikachu = pokedex[24]
  res.render("../views/pokemons/25", {pikachu: pikachu});
});
app.get ("/details/26", (req, res) => {
  const raichu = pokedex[25]
  res.render("../views/pokemons/26", {raichu: raichu});
});
app.get ("/details/27", (req, res) => {
  const sandshrew = pokedex[26]
  res.render("../views/pokemons/27", {sandshrew: sandshrew});
});
app.get ("/details/28", (req, res) => {
  const sandslash = pokedex[27]
  res.render("../views/pokemons/28", {sandslash: sandslash});
});
app.get ("/details/29", (req, res) => {
  const nidoran = pokedex[28]
  res.render("../views/pokemons/29", {nidoran: nidoran});
});
app.get ("/details/30", (req, res) => {
  const nidorina  = pokedex[29]
  res.render("../views/pokemons/30", {nidorina: nidorina});
});
app.get ("/details/31", (req, res) => {
  const nidoqueen = pokedex[30]
  res.render("../views/pokemons/31", {nidoqueen: nidoqueen});
});
app.get ("/details/32", (req, res) => {
  const nidoran2 = pokedex[31]
  res.render("../views/pokemons/32", {nidoran2: nidoran2});
});
app.get ("/details/33", (req, res) => {
  const nidorino  = pokedex[32]
  res.render("../views/pokemons/33", {nidorino: nidorino});
});
app.get ("/details/34", (req, res) => {
  const nidoking = pokedex[33]
  res.render("../views/pokemons/34", {nidoking: nidoking});
});
app.get ("/details/35", (req, res) => {
  const clefairy = pokedex[34]
  res.render("../views/pokemons/35", {clefairy: clefairy});
});
app.get ("/details/36", (req, res) => {
  const clefable = pokedex[35]
  res.render("../views/pokemons/36", {clefable: clefable});
});
app.get ("/details/37", (req, res) => {
  const vulpix = pokedex[36]
  res.render("../views/pokemons/37", {vulpix: vulpix});
});
app.get ("/details/38", (req, res) => {
  const ninetales = pokedex[37]
  res.render("../views/pokemons/38", {ninetales: ninetales});
});
app.get ("/details/39", (req, res) => {
  const jigglypuff = pokedex[38]
  res.render("../views/pokemons/39", {jigglypuff: jigglypuff});
});
app.get ("/details/40", (req, res) => {
  const wigglytuff = pokedex[39]
  res.render("../views/pokemons/40", {wigglytuff: wigglytuff});
});
app.get ("/details/41", (req, res) => {
  const zubat = pokedex[40]
  res.render("../views/pokemons/41", {zubat: zubat});
});
app.get ("/details/42", (req, res) => {
  const golbat = golbat[41]
  res.render("../views/pokemons/42", {golbat: golbat});
});
app.get ("/details/43", (req, res) => {
  const oddish = pokedex[42]
  res.render("../views/pokemons/43", {oddish: oddish});
});
app.get ("/details/44", (req, res) => {
  const gloom = pokedex[43]
  res.render("../views/pokemons/44", {gloom: gloom});
});
app.get ("/details/45", (req, res) => {
  const vileplume = pokedex[44]
  res.render("../views/pokemons/45", {vileplume: vileplume});
});
app.get ("/details/46", (req, res) => {
  const paras = pokedex[45]
  res.render("../views/pokemons/46", {paras: paras});
});
app.get ("/details/47", (req, res) => {
  const parasect = pokedex[46]
  res.render("../views/pokemons/47", {parasect: parasect});
});
app.get ("/details/48", (req, res) => {
  const venonat = pokedex[47]
  res.render("../views/pokemons/48", {venonat: venonat});
});
app.get ("/details/49", (req, res) => {
  const venomoth = pokedex[48]
  res.render("../views/pokemons/49", {venomoth: venomoth});
});
app.get ("/details/50", (req, res) => {
  const diglett = pokedex[49]
  res.render("../views/pokemons/50", {diglett: diglett});
});


app.get("/", (req, res) => {
  res.render("../views/index", {pokedexInput: pokedexInput});
});

app.listen(port, () =>
  console.log(`Server listening in http://localhost:${port}`));
