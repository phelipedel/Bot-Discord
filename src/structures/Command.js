class Command {
    constructor(client, options) {
        this.client = client   // essa contructor fara com que o discord de sugere como exemplo alguns comandos disponives para com sugestao 
        this.name = options.name  // nome do comando 
        this.description = options.description // descricao do comando 
        this.options = options.options  // opc dos comandos 
    }
}

module.exports = Command