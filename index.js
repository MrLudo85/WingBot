const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "WN/"

client.login("NDYxMjM5NDg4NDYzNTAzMzYx.DhQaRA.aP8TrQlZKEamHJ5m9xP1lAmKiVc");

client.on('ready', function() {
    client.user.setActivity(`WN/help | ${client.guilds.size} serveur | ${client.users.size} joueur `, {type: "STREAMING"});
    console.log(`====================`);
    console.log(`=====|=======|======`);
    console.log(`====================`);
    console.log(`===|============|===`);
    console.log(`====||||||||||||====`);
    console.log(`====================`);
});

client.on("message", message => {
    if(message.content.startsWith(prefix + "report")){
        message.delete();
        var reason1 = message.content.split(" ").slice(2).join(" ");
        if(!reason1){
            return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:")
        };
        var util = message.mentions.users.first();             
              var mention = message.mentions.users.first();
        if(!message.guild.channels.find("name", "report")) return message.reply(":x: **Vous devez créer le salon `report` et y mettre la permission pour que WingBot puisse y écrire dedans !** :x:");
        var report_embed = new Discord.RichEmbed()
        .setColor("#E622BF")
        .setTitle("Report")
        .addField("__Par : __", message.author.username)
        .addField("__**Pour : **__ ", message.mentions.users.first(), true)
        .addField("**Raison du report : **", reason1, true)
        .setFooter(`WingBot | report`)
        message.guild.channels.find('name', 'report').send(report_embed).catch();
        message.channel.send("__**Report envoyé avec succès !**__").then(function (message) { message.react("✅") })
    };

    if(message.content.startsWith(prefix + 'warn')){
        message.delete();
         var botrole = message.guild.member(client.user).hasPermission("KICK_MEMBERS");
      var memberrole = message.guild.member(message.author).hasPermission("KICK_MEMBERS");
      var reportmember = message.member.id;
      if(!message.mentions.users.first())
      return message.channel.send(":tools: **Comment utiliser ma commande =>** ```WN/warn <@utilisateur> <raison>``` **Permission requise ->** ```KICK_MEMBERS```")
      var member = message.mentions.users.first();
      var reason = message.content.split(" ").slice(2).join(" ");
      if(!botrole){
          return message.channel.send(":x: **Je n'ai pas la permission ``KICK_MEMBERS`` pour avertir cet utilisateur !:x: **")
        };
          if(!memberrole){
              return message.channel.send(":x: **Tu n'as pas la permission ``KICK_MEMBERS`` pour avertir cet utilisateur !** :x:")
          };
          if(!reason){
              return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:").catch()
          };
      if(memberrole){
          if(botrole){
            if(message.guild.member(message.mentions.users.first())){
                  eval(message.guild.member(message.mentions.users.first()))
                  message.guild.member(message.mentions.users.first()).send("Tu as été averti sur le serveur " +  message.guild.name + " par le modérateur <@" + message.author.id+"> pour la raison : \n " + reason )
                
                  
                  var warn_embed = new Discord.RichEmbed()
                  .setColor("#B40404")
                  .addField("**Avetissement du joueur **", message.mentions.users.first(), true)
                  .addField("**Avertissement exécuté Par **", message.author.tag, true)
                  .addField("**Raison de l'avertissement : **", reason, true)
                  .setFooter("WingBot | warn")
                  message.channel.send(warn_embed).then(function (message) { message.react("💢") })}
                }
              }
        }

        if(message.content.startsWith(prefix + 'kick')){
            message.delete();
          if (message.channel.type === "dm") return;
          if(!message.mentions.users.first()){
            return message.channel.send(":tools: **Comment utiliser ma commande =>** ```WN/kick <@utilisateur> <raison>```  **Permission requise ->** ```KICK_MEMBERS```");
          }
          if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.reply("**:x: Vous n'avez pas la permission !** :x:").catch(console.error);
          if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("**:x: Je n'ai pas la permission pour exclure. :x:**").catch(console.error);
            
          }
          var reason = message.content.split(" ").slice(2).join(" ");
          if(!reason){
               return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:")
           };
          var member = message.mentions.users.first();             
          message.guild.members.get(member.id).kick(); {
            var mentionned = message.mentions.users.first();
            var getvalueof;
            if(mentionned){
                var getvalueof = mentionned;
            } else {
                var getvalueof = message.author;
            }
            message.client.users.get(getvalueof.id).send("**Tu as été exclu du serveur **" +  message.guild.name + "** Pour la raison** " + reason)
    
            var kick_embed = new Discord.RichEmbed()
            .setColor("#B40404")
            .addField("**Exclusion du joueur **", message.mentions.users.first(), true)
            .addField("**Exclusion exécutée Par **", message.author.tag, true)
            .addField("**Raison de l'exclusion : **", reason, true)
            .setFooter("WingBot | Exclusion d'un membre du serveur " + message.guild.name + ".")
            message.channel.send(kick_embed).then(function (message) { message.react("❌") })
        }};

        if(message.content.startsWith(prefix + 'ban')){
            message.delete();
            if (message.channel.type === "dm") return;
                    if(!message.mentions.users.first()){
              return message.channel.send(":tools: **Comment utiliser ma commande ->** ```WN/ban <@utilisateur> <raison>```  **Permission requise ->** ```BAN_MEMBERS```");
            }
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))  return message.reply("**:x: Vous n'avez pas la permission !** :x:").catch(console.error);
            if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
              return message.reply("**:x: Je n'ai pas la permission pour bannir. :x:**").catch(console.error);
              
            }
            var reason = message.content.split(" ").slice(2).join(" ");
            if(!reason){
                 return message.channel.send(":x: **Vous devez indiquer une raison valable !** :x:")
             };
            var member = message.mentions.users.first();             
            message.guild.members.get(member.id).ban(); {
              var mentionned = message.mentions.users.first();
              var getvalueof;
              if(mentionned){
                  var getvalueof = mentionned;
              } else {
                  var getvalueof = message.author;
              }
            message.client.users.get(getvalueof.id).send("**Tu as été Banni du serveur **" +  message.guild.name + "** Pour la raison** " + reason)
            var ban_embed = new Discord.RichEmbed()
            .setColor("#B40404")
            .addField("**Bannissement du joueur **", message.mentions.users.first(), true)
            .addField("**Bannissement exécuté Par **", message.author.tag, true)
            .addField("**Raison du bannissement : **", reason, true)
            .setImage("https://cdn.discordapp.com/attachments/424936338031116308/454634287484895232/BAN.gif")
            .setFooter("WingBot | ban")
            message.channel.send(ban_embed).then(function (message) { message.react("🚫") })
        }};

        if (message.content.startsWith(prefix + "help")) {
            let helpembed = new Discord.RichEmbed()
            .setTitle(`WingBot | page d'aide`)
            .setDescription(`Voila la page d'aide de WingBot qui a pour prefix : ${prefix}`)
            .addField("__**Moderation**__", `${prefix}ban - ${prefix}kick - ${prefix}warn - ${prefix}report - ${prefix}mute - ${prefix}unmune`)
            .addField("__**utilitaires**__", `${prefix}help`)
            message.channel.send(helpembed)         
        }

        if (message.content.startsWith(prefix + "mute")) {
            if (message.channel.type === "dm") return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
            if(message.mentions.users.size === 0) {
              return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
            }
            let muteMember = message.guild.member(message.mentions.users.first());
            if(!muteMember) {
              return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
            }
            if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
              return message.reply("*:x: Je n'ai pas la permission pour mute...**").catch(console.error);
            }
            message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
                message.channel.send(`**${muteMember.user.username}** est désormais mute dans **#${message.channel.name}** :mute:`)
        })};
});

client.on("message", message => {
    if (message.content.startsWith(prefix + "unmute")) {
        if (message.channel.type === "dm") return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
        if(message.mentions.users.size === 0) {
          return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
        }
        if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
          return message.reply("*:x: Je n'ai pas la permission pour unmute...**").catch(console.error);
        }
        message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: true }).then(member => {
            message.channel.send(`**${muteMember.user.username}** est désormais unmute dans **#${message.channel.name}** :mute:`)
    })};
})