'use strict'


const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base'); // não usa new quando exporta direto !=  do class e function
const _repo = new repository();

//dependencia para geracap do token
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

function usuarioController(){

}

usuarioController.prototype.post = async(req, res) =>{
    let _validationContract = new validation();
    
    _validationContract.isRequired(req.body.nome,'Informe seu nome');
    _validationContract.isRequired(req.body.email,'Informe seu e-mail');
    _validationContract.isEmail(req.body.email,'O e-mail é invalido');
    _validationContract.isRequired(req.body.senha,'A senha é invalida');
    _validationContract.isRequired(req.body.senhaConfirmacao,'A confirmação de senha é invalida');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao,'A confirmação de senha falhou');

    let usuarioIsEmailExite = await _repo.IsEmailExiste(req.body.email);
    if(usuarioIsEmailExite){
        _validationContract.isTrue((usuarioIsEmailExite.nome != undefined), `Email ${req.body.email} já existe`);
    }

    //criptografia de senha
    req.body.senha = md5(req.body.senha);

    ctrlBase.post(_repo, _validationContract, req, res);
};

usuarioController.prototype.put = async(req, res) =>{
    let _validationContract = new validation();
    
    _validationContract.isRequired(req.body.nome,'Informe seu nome');
    _validationContract.isRequired(req.body.email,'Informe seu e-mail');
    _validationContract.isEmail(req.body.email,'O e-mail é invalido');
    _validationContract.isTrue(req.body._id,'Informe o id do usuario a ser alterado');

    let usuarioIsEmailExite = await _repo.IsEmailExiste(req.body.email);
    if(usuarioIsEmailExite){
        _validationContract.isTrue(
            (usuarioIsEmailExite.nome != undefined) && (usuarioIsEmailExite._id != req.params.id),
             `Email ${req.body.email} já existe`);
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

usuarioController.prototype.get = async(req, res) =>{
    ctrlBase.get(_repo, req, res);
};

usuarioController.prototype.getById = async(req, res) =>{
    ctrlBase.getById(_repo,req, res);
};

usuarioController.prototype.delete = async(req, res) =>{
    ctrlBase.delete(_repo, req, res);
};

usuarioController.prototype.autenticar = async(req, res) =>{
    let _validationContract = new validation();
    
    _validationContract.isRequired(req.body.senha,'Informe sua senha');
    _validationContract.isRequired(req.body.email,'Informe seu e-mail');
    _validationContract.isEmail(req.body.email,'O e-mail é inválido');

    if(!_validationContract.isValid()){
        res.status(400).send({message: 'Não foi possivel efetuar o login', validation: _validationContract.errors() })
        return;
    }

    let usuarioEncontrado = await _repo.authenticate(req.body.email, req.body.senha);

    if(usuarioEncontrado){
        res.status(200).send({
            usuario: usuarioEncontrado, 
            token: jwt.sign({user: usuarioEncontrado} , variables.Security.secretyKey)
        })
    }else{
        res.status(404).send({message: 'Usuário e senha inválidos'})
    }
}
module.exports = usuarioController;