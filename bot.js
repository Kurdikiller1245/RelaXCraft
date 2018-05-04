const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready', ()=>{
   console.log("Bot is online."); 
})


Client.on('message',(message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello, " + message.author + " how are you doing?");
    }
    if(message.content.startsWith(prefix + "help")){
message.channel.send({embed: {
    color: 0x28d62b,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "RelaXCraft Help",
    description: "",
    fields: [{
        name: "General Commands",
        value: "!help - Display this message",
        value: "!ip - show relaxcraft server ip",
        value: "!hello"
      },
      {
        name: "Staff Command",
        value: "/delete 1-100 - delete message"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© X_Just_RelaX_X"
    }
  }
});
}
        
        
        

    
    if(message.content.startsWith(prefix + "ip")){
        message.channel.send({embed:{
            color: 0x28d62b,
            description: message.author + " RelaXCraft server ip is relaxcraft.mcalias.com"
        }})
    }
    

    if(message.content.startsWith(prefix + "delete")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name', "Staff Team");
        if(author.roles.has(role.id)){
            if(!args[0]){
                message.delete();
                message.author.send("No arguments given.");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("Maximum is 100 messages at once.");
                return;
            }
            
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send({embed:{
                color: 0x28d62b,
                description: "Done, i have deleted " + args[0] + " messages."
            }})
            return;

            }
        }
    }
)

Client.login(process.env.BOT_TOKEN);
