const members = require("../../controllers/membersController");
const { converterNumber } = require('../../../utils/numberConverter')

module.exports = {
  name: "transfer",
  description: "Transfere dinheiro para algum usuário",
  args: true,
  guildOnly: true,
  economy: true,
  premium: false,
  userPermissions: "Nenhuma",
  CaPermissions: "Nenhuma",
  aliases: ["pay", "pagar", "transferir"],
  usage: "$transfer (usuário) (quantidade)",
  async execute(msg, args) {
    const mentionUser = msg.mentions.members.first();

    if (!mentionUser)
      return msg.reply(
        "**Você precisa informar alguém para transferir os DinDins!!**"
      );

    if (msg.author.id == mentionUser.id)
        return msg.reply('**Você não pode transferir DinDins para você mesmo!!**')

    const transferAuthor = await members.indexMember(msg.author.id);

    if (!transferAuthor)
      return msg.reply("**Você não foi encontrado em meu sistema!!**");

    if (!args[1]) return msg.reply("**Informe um valor a ser transferido!!**");

    const transferMember = await members.indexMember(mentionUser.id);
    const transferMoney = converterNumber(args[1])
    console.log(transferMoney)

    if (transferMoney <= 0 || !transferMoney)
      return msg.reply("**Informe um valor válido acima de 0!!**");

    if (transferAuthor.money < transferMoney)
      return msg.reply("**Você não tem DinDins suficientes para transferir!!**");

    const currentMoneyAuthor = Math.trunc(transferAuthor.money - transferMoney);
    const MoneyToMember = Math.trunc(transferMember.money + transferMoney);

    await members.updateDataMembers(
      { memberId: msg.author.id },
      { money: currentMoneyAuthor }
    );
    await members.updateDataMembers(
      { memberId: mentionUser.id },
      { money: MoneyToMember }
    );

    return msg.channel.send(
      ` **💵 ${msg.author}, Você transferiu ${transferMoney} DinDins para <@${mentionUser.id}> com sucesso!!**
        `
    );
  },
};
