const variables = {
    Api:{
        port: process.env.port || 3000 //envia uma porta espicifica quando chama o node --port ou na 3000
    },

    Database:{
        connection: process.env.connection || 'Caminho_E_Login_Para_O_MLAB' 
    },
    Security:{
        secretyKey: 'Hash da chave md5'
    }
}

module.exports = variables;