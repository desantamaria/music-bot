const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('MusicMan is online! ');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    } else if(command === 'playmusic'){
        client.commands.get('playmusic').execute(message, args);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command === 'stop'){
        client.commands.get('stop').execute(message, args);
    }
});


client.login('OTM0OTM2ODY4ODI5Njc1NjEw.Ye3Vzw.I-zjHbly-YvkQeYCq4zWC3NEVN0');