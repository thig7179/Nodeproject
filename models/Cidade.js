const db = require('../config/dbconnection');
const table = 'CIDADE';

module.exports = {
    listarCid,
    listarUmaCid,
    inserirCid,
    removerCid,
    alterarCid
};

function listarCid(callback) {

    let sql = `SELECT C.*, R.REG_DESCRICAO, R.REG_CODIGO FROM ${table} AS C 
                INNER JOIN REGIAO AS R ON C.REG_COD = R.REG_CODIGO;
                
                SELECT REG_CODIGO, REG_DESCRICAO FROM REGIAO;`;

    db.query(sql, callback);
}

function listarUmaCid(id, callback) {

    let sql = `SELECT C.*, R.REG_DESCRICAO FROM ${table} AS C 
                INNER JOIN REGIAO AS R ON C.REG_COD = R.REG_CODIGO WHERE CID_CODIGO = ${id};
                
                SELECT REG_CODIGO, REG_DESCRICAO FROM REGIAO;`;

    db.query(sql, callback);
}

function inserirCid(data, callback) {

    const statement = `INSERT INTO ${table} SET ?`;

    db.query(statement, data, callback);
}

function removerCid(id, callback) {

    const statement = `DELETE FROM ${table} WHERE CID_CODIGO = ${id}`;

    db.query(statement, callback);
}

function alterarCid(dados, callback) {

    const statement = `UPDATE ${table} SET 
                        CID_DESCRICAO = '${dados.cid_descricao}', 
                        CID_ESTADO = '${dados.cid_estado}',
                        CID_HABITANTES = ${dados.cid_habitantes},
                        CID_ECONOMICA = '${dados.cid_economica}',
                        CID_ANO_FUNDACAO = ${dados.cid_ano_fundacao},
                        REG_COD = ${dados.reg_cod}
                        WHERE CID_CODIGO = ${dados.cid_codigo}`;

    db.query(statement, callback);
}
