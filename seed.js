import Cocktail from "./models/cocktails.js";
import cocktailData from "./cocktail.json" assert {type:"json"};


Cocktail.insertMany(cocktailData)