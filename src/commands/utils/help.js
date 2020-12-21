const Discord = require("discord.js");
const config = require("../../../config.json");

const websiteURL = config.websiteURL;

module.exports = {
  name: "help",
  description: "Mostra alguns links úteis para ajudar o usuário",
  args: false,
  guildOnly: false,
  userPermissions: "Nenhuma",
  CaPermissions: "Nenhuma",
  aliases: ["ajuda", "ajude", "comandos", "commands"],
  usage: "$help",
  execute(msg, args) {
    const serverInfoEmbed = new Discord.MessageEmbed()
      .setColor("#ff0092")
      .setTitle("Olá, eu sou a Ca!")
      .setDescription(
        "Vejo que você está precisando de minha ajuda, e eu estou aqui para isso. Abaixo você verá algumas opções que podem ajudar e alguns links úteis."
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/754548334328283137/d98abaf5aec0265914b604b47eef9583.png"
      )
      .addFields(
        {
          name: "📨 Me convide para seu server",
          value: `[Ficarei muito feliz em fazer parte de seu servidor!](https://discord.com/oauth2/authorize?client_id=776164322548252693&permissions=8&scope=bot)`,
        },
        {
          name: "👷‍♂️ Entre em contato com o suporte",
          value: `[Minha equipe de suporte vai ficar feliz em receber suas dúvidas em meu servidor!](https://discord.gg/GM7YWMCe)`,
        },
        {
          name: "🗳 Vote na Ca para que eu consiga mais amiguinhos!!",
          value: `[Vote em mim na BPD](https://zuraaa.com/bots/)\n[Vote em mim no top.gg](https://top.gg/bot/)`,
        },
        {
          name: "🌐 Acesse meu Website",
          value: `[Acesse meu site para ter mais informações sobre mim](${websiteURL})`,
        },
        {
          name: "<> Meus comandos",
          value: `[Veja a minha lista completa de comandos](${websiteURL}/comandos.html)`,
        }
      )
      .setFooter("Com muito amor ❤ | Ca");
    msg.reply("", serverInfoEmbed);
  },
};
