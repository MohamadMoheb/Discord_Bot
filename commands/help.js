module.exports = {
    name: 'help',
    description: 'Lists all available commands',
    execute(message, args){
        message.channel.send('List of all available commands:');
    }
}