const Discord = require("discord.js");
const client = new Discord.Client();
let date = new Date();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on("disconnect", () => {
    console.log(`You have been disconnected`);
});

client.on("error", () => {
    console.error();
});

client.on("reconnecting", () => {
    console.log("You have been reconnected");
});

client.login(process.env.BOT_TOKEN);

client.setInterval(function channelStatus(){
    date = new Date();
    let nightChannel = client.guilds.get('560406112956973063').roles.get('560414885012439042');

    if(date.getHours() === 20 && date.getMinutes() === 0){
        client.channels.get("560406616839553034").overwritePermissions(nightChannel,{
            SEND_MESSAGES: true
        }).catch(console.error())
    }else if(date.getHours() === 24 && date.getMinutes() === 0){

        client.channels.get("560406616839553034").overwritePermissions(nightChannel,{
            SEND_MESSAGES: false
        }).catch(console.error())
    }
},1000*50);
