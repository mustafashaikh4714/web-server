const express = require('express'),
hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
// app.use((req ,res, next) => {
//   var date = new Date().toString();
//   console.log(`${date}: ${req.method}, ${req.url}`);
//    next(); 
// });

app.use(express.static(__dirname +'/public'));

app.get('/home',(req , res) => {
    res.render('home.hbs', {
        pageTitle : 'Home Page',
        currentYear : new Date().getFullYear()
    })
});

app.get('/about',(req , res) => {
   res.render('about.hbs', {
       pageTitle : 'About Page',
       currentYear : new Date().getFullYear()
   })
});

app.listen(3000, () => {
    console.log("server is running up on the port 3000");
});