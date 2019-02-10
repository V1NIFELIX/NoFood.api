//exports

const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

module.exports = async (req, res, next) =>{ // request, response, e se pode prosseguir ou não
//utilizando token(JSonWebToken)
    let token = req.body.token || req.query.query || req.headers['x-access-token'];

    if(token){
        //checando token
        try {
            let  decoded = await jwt.verify(token, variables.Security.secretyKey); // token, chaves de crip e descri(estão em variables)
            console.log(decoded);
            req.usuarioLogado = decoded;
            next();
        } catch (error) {
            res.status(401).send({message: 'Token inválido!'});
            return;
        }
    }else{
        res.status(401).send({message: 'Vocẽ precisa informar um token'});
        return;
    }
}