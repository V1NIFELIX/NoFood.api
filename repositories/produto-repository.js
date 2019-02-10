require('../models/produto-model');
const base = require('../bin/base/repository-base');

class produtoRepository{
    constructor(){
        this._base = new base('Produto'); //utilizando a const base
    }

    async create(data){
        return await this._base.create(data);

            /* como era antes de usar o base como modelo
                let categoria = new CategoriaModel(data);
                let resultado = await categoria.save();
                return resultado;
            */    
    }

    async update(id, data){
        return await this._base.update(id, data);

        /*              como era antes
                await ProdutoModel.findByIdAndUpdate(id, {$set: data});
                let resultado = await ProdutoModel.findById(id);
                return resultado; 
        */
    }

    async getAll(){
        return await this._base.getAll();
    }

    async getById(id){
        return await this._base.getById(id);
    }

    async delete(id){
        return await this._base.delete(id);
    }

}

module.exports = produtoRepository;