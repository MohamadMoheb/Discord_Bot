module.exports = {
    name: 'commands',
    description: 'Lists all available commands',
    execute(message, args){
        message.channel.send('Ping / Latency:Shows latency');
        //message.channel.send('Ping / Latency:Shows latency /n 2nd line test');
    }
}