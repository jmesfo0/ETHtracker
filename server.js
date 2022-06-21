const express = require('express');
const server = express();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

 
server.all('/', (req, res) => {
  res.send(`OK`)
})

function keepAlive() {
  server.listen(getRandomInt(3000,4000), () => { console.log("Keeping Alive!" + Date.now()) });
}
 
module.exports = keepAlive;

//keep alive script was made by cpt.motchy
