module.exports = {
    name: 'hello',
    description: "say hello to the bot!",
    execute(message, args){
        message.channel.send('Hi!');
    }
}