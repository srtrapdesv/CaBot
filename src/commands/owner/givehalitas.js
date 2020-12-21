const members = require("../../controllers/membersController");
const numberConverter = require('../../../utils/numberConverter')

module.exports = {
    name: 'givehalitas',
    description: 'Dá Halitas para algum usuário',
    args: true,
    guildOnly: true,
    economy: false,
    premium: false,
    userPermissions: 'Ser dono da Ca ou Administrador dela',
    CaPermissions: 'Nenhuma',
    aliases: ['giveht'],
    usage: '$givehalitas (usuário) (qtd.)',
    async execute(msg, args, bot) {
        if (msg.author.id !== '738829614553497701')
            return msg.reply('**Ei, só meu o meu criador pode usar este comando!!**')
        
        let user
        try { user = await bot.users.fetch(args.shift()) } 
        catch { user = msg.mentions.users.first() }

        if (!user)
            return msg.reply('**Não consegui achar este usuário!!**')

        if (!args[0]) {
            return msg.reply('**Informe o quanto de Halitas você quer dar!!**')
        }

        try {
            let amount = numberConverter(args[0])
            if (amount) {
                const userId = user.id
                await members.addHalitas(userId, amount)
                return msg.reply('**Você deu a `' + user.username + '` ' + amount + ' Halitas!!**')
            }
        } catch (err) {
            console.error('Erro ao dar Halitas a alguém: \n',err)
        }
    }
}
