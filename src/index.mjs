import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {collection} from './mongodb.mjs'

const app = express();
//const hbs = hbs();

app.use(express.json())

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the path to the templates directory
const templatePath = path.join(__dirname, '../tempelates');

// Set up the view engine and views directory
app.set('view engine', 'hbs');
app.set('views', templatePath);

app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/index", (req, res) => {
  res.render("index", { title: "Express with Handlebars" });
});

app.get("/", (req, res) => {
    res.render("login");
  });



app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', async (req, res) =>{
  const data = {
    name:req.body.name,
    password:req.body.password
  }
   console.log(data)
  await collection.insertMany([data])

  res.render('home')
})


app.post('/login', async (req, res) =>{
  const data = {
    name:req.body.name,
    password:req.body.password
  }
  try{
    const check = await collection.findOne({name:req.body.name})
    
  }catch(err){

  }


  res.render('home')
})