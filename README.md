# ETHtracker

To Invite the bot to your server, use the [Discord invite link](https://discord.com/api/oauth2/authorize?client_id=986475568386154527&permissions=2048&scope=bot).

## Self Hosting
 If you would like to host the bot yourself, first set up a Discord bot through the Discord Developer portal. Next, pull this repository onto your local machine:<br />
 `git clone <git_url>`
 <br>
 Open the .env file, and input your BOT_TOKEN in the correct space.
 <br />
 Next, ensure that you have NodeJS and NPM installed and run:
 <br />
 `npm install -g nodemon`
 <br />
 `npm install`
 <br />
 `start.bat nodemon index`
 <br />
 Congratulations! You now have a running the Discord bot.


## Heroku Guide

Fork this repoistory.<br />
Create an app on Heroku.<br />
Select Deploy->Github and connect your account.<br />
Put repo name in.<br />
Select Enable Automatic Deploys then Deploy Branch<br />
Go to Settings->Reveal Config Vars<br />
Add BOT_TOKEN in environmental variables.<br />
Done.



