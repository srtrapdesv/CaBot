module.exports = {
    name: 'Ca',
    description: 'A Ca se apresenta para quem enviou a mensagem!!',
    guildOnly: false,
    args: false,
    userPermissions: 'Nenhuma',
    CaPermissions: 'Nenhuma',
    usage: '$Ca',
    aliases: ['whoisyou', 'quemevoce'],
    execute(msg, args) {
        const responses = [
            `Olá ${msg.author}, eu sou a Ca, um simples bot criado com o objetivo de ajudar a todos!!`,
            `Eae ${msg.author}, como posso te ajudar?`,
            `Me chamou ${msg.author}? Como posso te ajudar?`,
            `Como vai ${msg.author}? Meu nome é Ca e estou aqui para te ajudar e divertir!!`,
            `Olá ${msg.author}, eu sou a Ca!!`
        ];

        msg.channel.send(responses[Math.floor(Math.random() * responses.length)])
    }
}