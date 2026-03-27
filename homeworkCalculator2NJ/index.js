//npm init -y 
//"start": "node index.js",
// npm run start
// npm install --save-dev nodemon
// "dev": "nodemon index.js"
// npm install express
// npm install express-handlebars


const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path');

const calcRouter = require('./routs/calculator');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // to see the data from the form
app.use('/', calcRouter);

app.listen(8080, () =>{
    console.log("Listening...")
})