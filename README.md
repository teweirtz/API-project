# Cocktail API
## About
Using data from a [cocktails and their respective ingredients dataset](https://www.kaggle.com/datasets/ai-first/cocktail-ingredients) I built out a simple REST API by converting the original dataset into a JSON file and seeding the data. It features a wide range of cocktail recipes with ingredients, measurements, and instructions.

## Methods Used
| Method | Endpoint      | Description                |
|:------ | :------------ | :------------------------- |
| GET    | /cocktail     | Reads all cocktails.       |
| GET    | /cocktail/:id | Reads a specific cocktail. |
| POST   | /cocktail     | Creates a new cocktail.    |
| PUT    | /cocktail/:id | Updates a cocktail.        |
| DELETE | /cocktail/:id | Deletes a cocktail.        |

## Installation
1. Fork and clone this repository.
2. Navigate into the directory.
```
$ cd API-Project 
```
3. Install dependencies.
```
$ npm install express
$ npm install mongoose
```
4. Seed the data.
```
$ node db/seed.js
```
4. Start the server.
``` 
$ node index.js
```
5. Open in web browser.
    - > http://localhost:3000/

### Technology Used
-Javascript
-Express.js
-Mongoose
-MongoDB
-Node.js
