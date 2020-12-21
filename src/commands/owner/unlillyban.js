const members = require("../../controllers/membersController");

module.exports = {
    name: 'unlillyban',
    description: 'Usado para banir usuários de usar a Ca',
    args: true,
    guildOnly: true,
    economy: false,
    premium: false,
    userPermissions: 'Ser dono da Ca ou Administrador dela',
    lillyPermissions: 'Nenhuma',
    aliases: ['unlb', 'desbanirdalilly'],
    usage: '$unlillyban (usuário)',
    async execute(msg, args, bot) {
        if (msg.author.id !== '738829614553497701')
            return msg.reply('**Ei, só meu o meu criador pode usar este comando!!**')
        
        let user
        try { user = await bot.users.fetch(args.shift()) } 
        catch { user = msg.mentions.users.first() }

        if (!user)
            return msg.reply('**Não consegui achar este usuário!!**')

        if (user.id == '738829614553497701')
            return msg.reply('**Você não pode desbanir meu criador!!**')
        try { 
            await members.updateDataMembers({ memberId: user.id }, { lillyBan: false })
            return msg.channel.send(`**${msg.author}, o usuário *${user.username}* foi permanentemente desbanido da Ca!!**`)
        } catch(err) {
            console.error('Erro ao desbanir usuário: \n', err);
        }
    }
}
