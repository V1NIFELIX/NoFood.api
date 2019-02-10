require('../models/categoria-model');
const base = require('../bin/base/repository-base'); // modelo base de um repositorio

class categoriaRepository{

    constructor(){
        this._base = new base('Categoria'); //utilizando a const base
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
                await CategoriaModel.findByIdAndUpdate(id, {$set: data});
                let resultado = await CategoriaModel.findById(id);
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

module.exports = categoriaRepository;