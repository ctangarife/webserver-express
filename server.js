const express = require("express");
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')
app.use(express.static(__dirname+'/public'));

const port = process.env.PORT || 8080;
 
//Express HBS engine
hbs.registerPartials(__dirname+'/views/parciales')
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
  res.render('home', {
      nombre: 'cristian'
  })
});
app.get("/about", (req, res) => {
  res.render('about', {
      nombre: 'cristian'
  })
});

app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el pueto ${port}`)
});
