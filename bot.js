const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on('ready', ()=>{
   console.log("Bot is online.");

   client.user.setPresence({ game: { name: 'Use !help', type: 0 } });
})


client.on('message',(message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello, " + message.author + " how are you doing?");
    }
    if(message.content.startsWith(prefix + "help"))
{
    const embed = new Discord.RichEmbed()
    .setColor("0x28d62b")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTitle("RelaXCraft Help")
    .setDescription("RelaXCraft Help")
    .addField("General Commands", "!help - Display this message \n !ip - show RelaXCraft ip \n !hello")
    .addField("Staff commands", "/delete 1-100 - deletes all the messages in the specified number")
    .setFooter("© X_Just_RelaX_X", client.user.avatarURL)
message.channel.send(embed)
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

client.login(process.env.BOT_TOKEN);

