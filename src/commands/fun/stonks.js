const memesBuilder = require('../../../lilly-plugins/lilly-munch/memes/memesBuilder')

module.exports = {
  name: "stonks",
  description: "Crie seu meme stonks!!",
  args: true,
  guildOnly: true,
  economy: false,
  premium: false,
  fun: true,
  userPermissions: "Nenhuma",
  CaPermissions: "Nenhuma",
  aliases: [],
  usage: "$stonks (frase)",
  async execute(msg, args) {
    return memesBuilder(msg, args, "stonks")
  },
};
