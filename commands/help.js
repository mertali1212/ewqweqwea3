const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("VİCE CİTY")
        .setTitle("KOMUTLAR")
        .setDescription(`Toplam Komutlar: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "yardım",
    aliases: ["h"],
    usage: `yardım`
}
