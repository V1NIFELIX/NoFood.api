'use strict'//separa as variaves de arquivos diferentes

const app = require('../NoFood.Api/bin/express');
const variables = require('../NoFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, ()=>{
    console.info(`Api incializado com sucesso na porta ${variables.Api.port}`);
});




//INICIANDO SERVIDOR
app.listen(3000, ()=>{
    console.info('Api incializado com sucesso na posta 3000');
})

