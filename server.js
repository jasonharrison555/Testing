// express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1')
 
//example 1
//app.get('/', (req, res) => {
//res.send("Mariya Harrison");
 //});
 app.get('/', lesson1Controller.mariyaRoute);

 app.get('/jason', lesson1Controller.jasonRoute);

 //example 1
//app.get('/jason', (req, res) => {
 //   res.send("Jason Harrison");
 // });
 
const port = 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});