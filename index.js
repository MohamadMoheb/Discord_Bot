const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const token = require("./config.json").token 

const prefix = '%';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Mazzika is now online!");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping' || command == 'latency'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command == 'help' || command == 'commands' || command == 'commandlist'){
        client.commands.get('commandlist').execute(message, args);
    }
    else if(command == 'play' || command == 'p'){
        client.commands.get('play').execute(message, args);
    }
    else if(command == 'leave'){
        client.commands.get('leave').execute(message, args);
    }
    else if(command == 'np' || command == 'playing' || command == 'nowplaying'){
        client.commands.get('leave').execute(message, args);
    }
    else if(command == 'loop' || command == 'loopsong'){
        client.commands.get('loopsong').execute(message, args);
    }
    else if(command == 'loopqueue'){
        client.commands.get('loopqueue').execute(message, args);
    }
    else if(command == 'queue'){
        client.commands.get('queue').execute(message, args);
    }

    else if(command == 'eddy' || command == 'cynthia' || command == 'chris'){
        client.commands.get('emmak').execute(message, args);
    }
});

client.login(token)