import express from "express"
import Cocktail from '../models/cocktails.js'

const cocktailRouter = express.Router();

cocktailRouter.get('/cocktail', async (req, res) => {
    const Cocktail = await Cocktail.find({})
    res.json(Cocktail)
})

cocktailRouter.get('/cocktail/:id', async (req,res) => {
    const Cocktail = await Cocktail.findById(req.params.id)
    res.json(Cocktail)
})

cocktailRouter.post('/cocktail', async (req,res) => {
    const Cocktail = await Cocktail.create(req.body)
    res.json(Cocktail)
})

cocktailRouter.put('/cocktail/:id', async (req,res) => {
    const Cocktail = await Cocktail.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Cocktail)
    })

cocktailRouter.delete('/cocktail/:id', (req,res) =>{
        Cocktail.findByIdAndDelete( {_id: req.params.id})
            .then(Cocktail => {
                res.json(Cocktail)
            }
        )
    })


export default cocktailRouter;