const model = require('../models/Regiao.js');

module.exports.listaRegioes = (req, res) => {

    model.listarReg((err, results) => {

        if (err) {
            throw err;
        }

        res.render('../views/regiao/regiao_lista.ejs', {regioes: results, title: 'Lista das Regiões'})
    });
};

module.exports.mostraRegiao = (req, res) => {

    let id = req.params.codigo;

    model.listarUmaReg(id, (err, result) => {

        if (err) {
            throw err;
        }

        res.render('../views/regiao/regiao_detail.ejs', {regiao: result, title: result[0].REG_DESCRICAO})
    });
};

module.exports.alterarRegiaoForm = (req, res) => {

    let id = req.params.codigo;

    model.listarUmaReg(id, (err, result) => {

        if (err) {
            throw err;
        }

        res.render('../views/regiao/regiao_edit.ejs', {regiao: result, title: result[0].REG_DESCRICAO})
    });
};

module.exports.alterarRegiao = (req, res) => {

    let data = req.body;

    model.alterarReg(data, (err) => {

        if (err) {
            throw err;
        }

        res.redirect('/regioes')
    })
};

module.exports.regiaoForm = (req, res) => {

    model.listarReg((err, results) => {

        if (err) {
            throw err;
        }

        res.render('../views/regiao/regiao_create.ejs', {regioes: results, title: 'Cadastrar Região'});
    });
};

module.exports.inserirRegiao = (req, res) => {

    let data = req.body;

    model.inserirReg(data, (err) => {

        if (err) {
            throw err;
        }

        res.redirect('/regioes');
    })
};

module.exports.removeRegiao = (req, res) => {

    let id = req.params.codigo;

    model.removerReg(id, (err) => {

        if (err) {
            throw err;
        }

        res.redirect('/regioes')
    })
};