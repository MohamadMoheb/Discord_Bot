module.exports = {
    name: 'ping',
    description: 'Shows latency',
    execute(message, args){
        message.channel.send(`Latency = ${Date.now() - message.createdTimestamp}ms!`);
    }
}