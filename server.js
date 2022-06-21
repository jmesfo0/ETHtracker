const express = require('express');
const server = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
server.all('/', (req, res) => {
  res.send(`OK`)
})

function keepAlive() {
  server.listen(getRandomInt(3000,4000), () => { console.log("Keeping Alive!" + Date.now()) });
}
 
module.exports = keepAlive;

//keep alive script was made by cpt.motchy