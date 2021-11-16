const model = require('../models/Cidade');

module.exports.listaCidades = (req, res) => {

    model.listarCid((err, results) => {

        if (err) {
            throw err;
        }

        res.render('../views/cidade/cidade_lista.ejs', {cidades: results[0], title: 'Lista das Cidades'})
    });
};

module.exports.mostraCidade = (req, res) => {

    let id = req.params.codigo;

    model.listarUmaCid(id, (err, result) => {

        if (err) {
            throw err;
        }

        res.render('../views/cidade/cidade_detail.ejs', {cidade: result[0], title: result[0].CID_DESCRICAO})
    });
};

module.exports.cidadesForm = (req, res) => {

    model.listarCid((err, results) => {

        if (err) {
            throw err;
        }

        res.render('../views/cidade/cidade_create.ejs', {
            cidades: results[0],
            regioes: results[1],
            title: 'Cadastrar Cidade'
        });
    });
};

module.exports.inserirCidade = (req, res) => {

    let data = req.body;

    model.inserirCid(data, (err) => {

        if (err) {
            throw err;
        }

        res.redirect('/cidades');
    })
};

module.exports.removeCidade = (req, res) => {

    let id = req.params.codigo;

    model.removerCid(id, (err) => {

        if (err) {
            throw err;
        }

        res.redirect('/cidades')
    })
};

module.exports.alterarCidForm = (req, res) => {

    let id = req.params.codigo;

    model.listarUmaCid(id, (err, result) => {

        if (err) {
            throw err;
        }

        res.render('../views/cidade/cidade_edit.ejs', {cidade: result[0], regioes: result[1], title: result[0].REG_DESCRICAO})
    });
};

module.exports.alterarCidade = (req, res) => {

    let data = req.body;

    model.alterarCid(data, (err) => {

        if (err) {
            throw err;
        }

        res.redirect('/cidades')
    })
};