const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`)
})

client.on('message', message => {
  if(message.author.bot)return
  if (!message.content.startsWith('k?')) return

  if(message.content === "k?hello"){
    message.channel.send("Hello!")
  } else if(message.content === 'k?ping'){
    message.channel.send({
      embed: {
        title: 'Pong!',
        description: new Date().getTime() - message.createdTimestamp + " ms",
      }
    })
  } else {message.channel.send({
      embed: {
        description: "コマンドが存在しません"
      }
    }).then(msg => {
    msg.delete({ timeout: 4000 })
  })
  }
});

client.login("token")
