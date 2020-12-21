const mongoose = require('mongoose')
const memberController = require('../../controllers/membersController')

module.exports = {
    name: 'register',
    description: 'Registra o usuário no Banco de Dados da Ca',
    args: false,
    economy: false,
    guildOnly: true,
    userPermissions: 'Nenhuma',
    CaPermissions: 'Nenhuma',
    aliases: ['registrar'],
    usage: '$register',
    async execute(msg, args) {
        const existMember = await memberController.indexMember(msg.author.id)

        if (existMember) {
            return msg.reply('Você já está em meu DB!!')
        }

        memberController.saveMember(member)
    }
}