import express from "express"
import Cocktail from '../models/cocktails.js'

const cocktailRouter = express.Router();

cocktailRouter.get('/cocktail', async (req, res) => {
    const cocktail = await Cocktail.find({})
    res.json(cocktail)
})

cocktailRouter.get('/cocktail/:id', async (req,res) => {
    const cocktail = await Cocktail.findById(req.params.id)
    res.json(cocktail)
})

cocktailRouter.post('/cocktail', async (req,res) => {
    const cocktail = await Cocktail.create(req.body)
    res.json(cocktail)
})

cocktailRouter.put('/cocktail/:id', async (req,res) => {
    const cocktail = await Cocktail.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(cocktail)
    })

cocktailRouter.delete('/cocktail/:id', (req,res) =>{
        Cocktail.findByIdAndDelete( {_id: req.params.id})
            .then(cocktail => {
                res.json(cocktail)
            }
        )
    })


export default cocktailRouter;