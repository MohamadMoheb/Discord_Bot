module.exports = {
    name: 'commandlist',
    description: 'Lists all available commands',
    execute(message, args){
        message.channel.send("Ping / Latency:Shows latency \n2nd line test");
    }
}