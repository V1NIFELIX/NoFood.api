'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;// importando schema

const categoriaModel = new schema({ //categoria(tabela)
    titulo: {trim: true, index:true, required:true, type: String},
    descricao: {type: String},
    foto: {type:String, required: true},
    ativa: {type:Boolean, required:true, default:true},
    dataCriacao: {type: Date, default: Date.now}
}, {versionKey: false});

categoriaModel.pre('save', next =>{//antes de salvar
    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();    
});

//exportar modelo

module.exports =  mongoose.model('Categoria', categoriaModel);