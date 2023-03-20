import express from "express"
import Cocktail from '../models/cocktails.js'

const cocktailRouter = express.Router();
/** 
 * @api {get} /cocktail Reads all cocktails in the database.
 * @apiName GetCocktails
 * @apiGroup Cocktail
 * @apiSuccess {String} strDrink Name of the cocktail.
 * @apiSuccess {Number} idDrink ID of the cocktail.
 * @apiSuccess {String} strAlcoholic If the cocktail is alcoholic or not.
 * @apiSuccess {String} strGlass Type of glass the cocktail comes in.
 * @apiSuccess {String} strIngredient1 First ingredient of the cocktail.
 * @apiSuccess {String} strIngredient2 Second ingredient of the cocktail.
 * @apiSuccess {String} strIngredient3 Third ingredient of the cocktail.
 * @apiSuccess {String} strIngredient4 Fourth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient5 Fifth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient6 Sixth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient7 Seventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient8 Eigth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient9 Ninth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient10 Tenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient11 Eleventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient12 Twelfth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient13 Thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient14 Fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient15 Fifteenth ingredient of the cocktail.
 * @apiSuccess {String} strInstructions Instructions on how to make the cocktail.
 * @apiSuccess {String} strMeasure1 Measurement for the first ingredient of the cocktail.
 * @apiSuccess {String} strMeasure2 Measurement for the second ingredient of the cocktail.
 * @apiSuccess {String} strMeasure3 Measurement for the third ingredient of the cocktail.
 * @apiSuccess {String} strMeasure4 Measurement for the fourth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure5 Measurement for the fifth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure6 Measurement for the sixth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure7 Measurement for the seventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure8 Measurement for the eigth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure9 Measurement for the ninth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure10 Measurement for the tenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure11 Measurement for the eleventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure12 Measurement for the twelfth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure13 Measurement for the thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure14 Measurement for the fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure15 Measurement for the fifteenth ingredient of the cocktail.
 * 
 */
cocktailRouter.get('/cocktail', async (req, res) => {
    const cocktail = await Cocktail.find({})
    res.json(cocktail)
})
/** 
 * @api {get} /cocktail/:id Reads a specific cocktail from the database.
 * @apiName GetCocktail
 * @apiGroup Cocktail
 * @apiSuccess {String} strDrink Name of the cocktail.
 * @apiSuccess {Number} idDrink ID of the cocktail.
 * @apiSuccess {String} strAlcoholic If the cocktail is alcoholic or not.
 * @apiSuccess {String} strGlass Type of glass the cocktail comes in.
 * @apiSuccess {String} strIngredient1 First ingredient of the cocktail.
 * @apiSuccess {String} strIngredient2 Second ingredient of the cocktail.
 * @apiSuccess {String} strIngredient3 Third ingredient of the cocktail.
 * @apiSuccess {String} strIngredient4 Fourth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient5 Fifth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient6 Sixth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient7 Seventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient8 Eigth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient9 Ninth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient10 Tenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient11 Eleventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient12 Twelfth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient13 Thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient14 Fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient15 Fifteenth ingredient of the cocktail.
 * @apiSuccess {String} strInstructions Instructions on how to make the cocktail.
 * @apiSuccess {String} strMeasure1 Measurement for the first ingredient of the cocktail.
 * @apiSuccess {String} strMeasure2 Measurement for the second ingredient of the cocktail.
 * @apiSuccess {String} strMeasure3 Measurement for the third ingredient of the cocktail.
 * @apiSuccess {String} strMeasure4 Measurement for the fourth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure5 Measurement for the fifth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure6 Measurement for the sixth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure7 Measurement for the seventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure8 Measurement for the eigth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure9 Measurement for the ninth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure10 Measurement for the tenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure11 Measurement for the eleventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure12 Measurement for the twelfth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure13 Measurement for the thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure14 Measurement for the fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure15 Measurement for the fifteenth ingredient of the cocktail.
 */
cocktailRouter.get('/cocktail/:id', async (req,res) => {
    const cocktail = await Cocktail.findById(req.params.id)
    res.json(cocktail)
})
/**
 * @api {post} /cocktail Creates a new cocktail in the database.
 * @apiName CreateCocktail
 * @apiGroup Cocktail
 * @apiSuccess {String} strDrink Name of the cocktail.
 * @apiSuccess {Number} idDrink ID of the cocktail.
 * @apiSuccess {String} strAlcoholic If the cocktail is alcoholic or not.
 * @apiSuccess {String} strGlass Type of glass the cocktail comes in.
 * @apiSuccess {String} strIngredient1 First ingredient of the cocktail.
 * @apiSuccess {String} strIngredient2 Second ingredient of the cocktail.
 * @apiSuccess {String} strIngredient3 Third ingredient of the cocktail.
 * @apiSuccess {String} strIngredient4 Fourth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient5 Fifth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient6 Sixth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient7 Seventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient8 Eigth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient9 Ninth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient10 Tenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient11 Eleventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient12 Twelfth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient13 Thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient14 Fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient15 Fifteenth ingredient of the cocktail.
 * @apiSuccess {String} strInstructions Instructions on how to make the cocktail.
 * @apiSuccess {String} strMeasure1 Measurement for the first ingredient of the cocktail.
 * @apiSuccess {String} strMeasure2 Measurement for the second ingredient of the cocktail.
 * @apiSuccess {String} strMeasure3 Measurement for the third ingredient of the cocktail.
 * @apiSuccess {String} strMeasure4 Measurement for the fourth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure5 Measurement for the fifth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure6 Measurement for the sixth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure7 Measurement for the seventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure8 Measurement for the eigth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure9 Measurement for the ninth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure10 Measurement for the tenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure11 Measurement for the eleventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure12 Measurement for the twelfth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure13 Measurement for the thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure14 Measurement for the fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure15 Measurement for the fifteenth ingredient of the cocktail.
 */
cocktailRouter.post('/cocktail', async (req,res) => {
    const cocktail = await Cocktail.create(req.body)
    res.json(cocktail)
})
/** 
 * @api {put} /cocktail/:id Edits a cocktail in the database.
 * @apiName EditCocktail
 * @apiGroup Cocktail
 * @apiSuccess {String} strDrink Name of the cocktail.
 * @apiSuccess {Number} idDrink ID of the cocktail.
 * @apiSuccess {String} strAlcoholic If the cocktail is alcoholic or not.
 * @apiSuccess {String} strGlass Type of glass the cocktail comes in.
 * @apiSuccess {String} strIngredient1 First ingredient of the cocktail.
 * @apiSuccess {String} strIngredient2 Second ingredient of the cocktail.
 * @apiSuccess {String} strIngredient3 Third ingredient of the cocktail.
 * @apiSuccess {String} strIngredient4 Fourth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient5 Fifth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient6 Sixth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient7 Seventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient8 Eigth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient9 Ninth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient10 Tenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient11 Eleventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient12 Twelfth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient13 Thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient14 Fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient15 Fifteenth ingredient of the cocktail.
 * @apiSuccess {String} strInstructions Instructions on how to make the cocktail.
 * @apiSuccess {String} strMeasure1 Measurement for the first ingredient of the cocktail.
 * @apiSuccess {String} strMeasure2 Measurement for the second ingredient of the cocktail.
 * @apiSuccess {String} strMeasure3 Measurement for the third ingredient of the cocktail.
 * @apiSuccess {String} strMeasure4 Measurement for the fourth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure5 Measurement for the fifth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure6 Measurement for the sixth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure7 Measurement for the seventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure8 Measurement for the eigth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure9 Measurement for the ninth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure10 Measurement for the tenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure11 Measurement for the eleventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure12 Measurement for the twelfth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure13 Measurement for the thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure14 Measurement for the fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure15 Measurement for the fifteenth ingredient of the cocktail.
 */ 
cocktailRouter.put('/cocktail/:id', async (req,res) => {
    const cocktail = await Cocktail.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(cocktail)
    })
/** 
 * @api {deletes} /cocktail/:id Removes a cocktail in the database.
 * @apiName DeleteCocktail
 * @apiGroup Cocktail
 * @apiSuccess {String} strDrink Name of the cocktail.
 * @apiSuccess {Number} idDrink ID of the cocktail.
 * @apiSuccess {String} strAlcoholic If the cocktail is alcoholic or not.
 * @apiSuccess {String} strGlass Type of glass the cocktail comes in.
 * @apiSuccess {String} strIngredient1 First ingredient of the cocktail.
 * @apiSuccess {String} strIngredient2 Second ingredient of the cocktail.
 * @apiSuccess {String} strIngredient3 Third ingredient of the cocktail.
 * @apiSuccess {String} strIngredient4 Fourth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient5 Fifth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient6 Sixth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient7 Seventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient8 Eigth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient9 Ninth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient10 Tenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient11 Eleventh ingredient of the cocktail.
 * @apiSuccess {String} strIngredient12 Twelfth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient13 Thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient14 Fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strIngredient15 Fifteenth ingredient of the cocktail.
 * @apiSuccess {String} strInstructions Instructions on how to make the cocktail.
 * @apiSuccess {String} strMeasure1 Measurement for the first ingredient of the cocktail.
 * @apiSuccess {String} strMeasure2 Measurement for the second ingredient of the cocktail.
 * @apiSuccess {String} strMeasure3 Measurement for the third ingredient of the cocktail.
 * @apiSuccess {String} strMeasure4 Measurement for the fourth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure5 Measurement for the fifth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure6 Measurement for the sixth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure7 Measurement for the seventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure8 Measurement for the eigth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure9 Measurement for the ninth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure10 Measurement for the tenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure11 Measurement for the eleventh ingredient of the cocktail.
 * @apiSuccess {String} strMeasure12 Measurement for the twelfth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure13 Measurement for the thirteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure14 Measurement for the fourteenth ingredient of the cocktail.
 * @apiSuccess {String} strMeasure15 Measurement for the fifteenth ingredient of the cocktail.
 */
cocktailRouter.delete('/cocktail/:id', (req,res) =>{
        Cocktail.findByIdAndDelete( {_id: req.params.id})
            .then(cocktail => {
                res.json(cocktail)
            }
        )
    })


export default cocktailRouter;