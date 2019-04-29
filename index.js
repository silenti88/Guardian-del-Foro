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
    var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    newdate = new Date(utc + (3600000*-4));
    let nightRole = client.guilds.get('560406112956973063').roles.find(r=>r.name === "Anikis");

    if(newdate.getHours() === 20 && newdate.getMinutes() === 0){
        client.channels.get("560406616839553034").overwritePermissions(nightRole,{
            SEND_MESSAGES: true
        }).catch(console.error())
    }else if(newdate.getHours() === 24 && newdate.getMinutes() === 0){

        client.channels.get("560406616839553034").overwritePermissions(nightRole,{
            SEND_MESSAGES: false
        }).catch(console.error())
    }
},1000*50);
