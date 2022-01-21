const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'raw'
        })
    }
    // - Verificando se o bot esta na call ou nao updateVoiceState.
    run = async (packet) => {
        this.client.manager.updateVoiceState(packet)
    }
}