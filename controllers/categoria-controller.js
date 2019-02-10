'use strict'

const repository = require('../repositories/categoria-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function categoriaController(){

}

categoriaController.prototype.post = async(req, res) =>{
   //inserindo no mongodb
   
   let _validationContract = new validation();
       _validationContract.isRequired(req.body.titulo, 'O Titulo é obrigatório');// categoria models
       _validationContract.isRequired(req.body.foto, 'A Foto é obrigatória');

       ctrlBase.post(_repo, _validationContract, req, res);
};

categoriaController.prototype.put = async(req, res) =>{
    let _validationContract = new validation();
       _validationContract.isRequired(req.body.titulo, 'O Titulo é obrigatório');// categoria models
       _validationContract.isRequired(req.body.foto, 'A Foto é obrigatória');
       _validationContract.isRequired(req.body.params.id, 'O id que será alterado é obrigatório');

       ctrlBase.put(_repo, _validationContract, req, res);
};

categoriaController.prototype.get = async(req, res) =>{
    ctrlBase.get(_repo, req, res);
};

categoriaController.prototype.getById = async(req, res) =>{
    ctrlBase.getById(_repo,req,res);
};

categoriaController.prototype.delete = async(req, res) =>{
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;

/*
'use strict'

require('../models/categoria-model');
const repository = require('../repositories/categoria-repository');

function categoriaController(){

}

categoriaController.prototype.post = async(req, res) =>{
   //inserindo no mongodb
   
   let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

categoriaController.prototype.put = async(req, res) =>{
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};

categoriaController.prototype.get = async(req, res) =>{
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

categoriaController.prototype.getById = async(req, res) =>{
    let categoria = await new repository().getById(req.params.id);
    res.status(200).send(categoria);
};

categoriaController.prototype.delete = async(req, res) =>{
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoriaController;
*/