import express from "express"
import cocktailRouter from "./routes/cocktails.js"
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Shaken, not stirred');
});

app.use('/', cocktailRouter)

app.listen(3000, () => {
    console.log("app listening on port 3000")
});