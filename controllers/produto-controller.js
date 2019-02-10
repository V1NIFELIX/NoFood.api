'use strict'

const repository = require('../repositories/produto-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function produtoController(){

}

produtoController.prototype.post = async(req, res) =>{
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome do produto é obrigatório');
    _validationContract.isRequired(req.body.preco, 'O preço do produto é obrigatório');
    _validationContract.isRequired(req.body.descricao, 'A descrição do produto é obrigatória');
    _validationContract.isRequired(req.body.foto, 'A foto do produto é obrigatório');
   
    if(req.body.preco){
        _validationContract.isTrue(req.body.preco == 0, 'O preço deve ser maior que 0');
    }

    ctrlBase.post(_repo, _validationContract, req, res);
};

produtoController.prototype.put = async(req, res) =>{
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome do produto é obrigatório');
    _validationContract.isRequired(req.body.preco, 'O preço do produto é obrigatório');
    _validationContract.isRequired(req.body.descricao, 'A descrição do produto é obrigatória');
    _validationContract.isRequired(req.body.foto, 'A foto do produto é obrigatório');
   
    if(req.body.preco){
        _validationContract.isTrue(req.body.preco == 0, 'O preço deve ser maior que 0');
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

produtoController.prototype.get = async(req, res) =>{
    ctrlBase.get(_repo, req, res);
};

produtoController.prototype.getById = async(req, res) =>{
    ctrlBase.getById(_repo, req, res);
};

produtoController.prototype.delete = async(req, res) =>{
    ctrlBase.delete(_repo, req, res);
};

module.exports = produtoController;


/*
'use strict'

require('../models/produto-model');
const repository = require('../repositories/produto-repository');

function produtoController(){

}

produtoController.prototype.post = async(req, res) =>{
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

produtoController.prototype.put = async(req, res) =>{
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};

produtoController.prototype.get = async(req, res) =>{
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

produtoController.prototype.getById = async(req, res) =>{
    let categoria = await new repository().getById(req.params.id);
    res.status(200).send(categoria);
};

produtoController.prototype.delete = async(req, res) =>{
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = produtoController;
*/