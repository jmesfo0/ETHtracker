import { Client, Intents } from "discord.js";
import axios from "axios";
import express from "express";
import {} from 'dotenv/config'

const server = express();

server.get('/', function (req, res) {
  res.send('ETHtracker')
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.");
  });
}

const url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
let lastPrice;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

const BOT_TOKEN = process.env["BOT_TOKEN"];

client.once("ready", () => {
  console.log("We on . . .");

  const SERVER_ID = process.env["SERVER_ID"];
  const guild = client.guilds.cache.get(SERVER_ID);
  
  setInterval(async () => {
    getPrice();
    client.user.setActivity("ETH: $" + lastPrice, { type: "WATCHING" }).catch(console.error);
  }, 5000);
});

client.on('message', msg => {
  if (msg.content === '!eth') {
    msg.reply('Current ETH Price: $'+lastPrice);
  }
});

function getPrice() {
  axios.get(url).then((response) => {
    lastPrice = response.data.ethereum.usd;
  });
}

keepAlive();
client.login(BOT_TOKEN);
