const members = require("../../controllers/membersController");

module.exports = {
    name: 'lillyban',
    description: 'Usado para banir usuários de usar a Ca',
    args: true,
    guildOnly: true,
    economy: false,
    premium: false,
    userPermissions: 'Ser dono da Ca ou Administrador dela',
    lillyPermissions: 'Nenhuma',
    aliases: ['lb', 'banirdalilly'],
    usage: '$lillyban (usuário) (?motivo)',
    async execute(msg, args, bot) {
        if (msg.author.id !== '738829614553497701')
            return msg.reply('**Ei, só meu o meu criador pode usar este comando!!**')
        
        let user
        try { user = await bot.users.fetch(args.shift()) } 
        catch { user = msg.mentions.users.first() }
        const reason = args.join(' ') || 'Motivo não informado'

        if (!user)
            return msg.reply('**Não consegui achar este usuário!!**')

        if (user.id == '738829614553497701')
            return msg.reply('**Você não pode banir meu criador!!**')
        try { 
            await members.updateDataMembers({ memberId: user.id }, { lillyBan: true })
            user.send('Você foi banido **permanentemente** da Ca!! Você não poderá usar meus comandos em todos os servidores que ativaram a *LCT*! Você poderá contestar nossa decisão no servidor de suporte: https://discord.gg/T7JKPCPTrq .\n\n'  + '**Motivo do banimento: **`' + reason + '`')

            return msg.channel.send(`**${msg.author}, o usuário *${user.username}* foi permanentemente banido da Ca!!**\n`)
        } catch(err) {
            console.error('Erro ao banir usuário: \n', err);
        }
    }
}
