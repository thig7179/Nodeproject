const controller = require('../controllers/regiaoController');

app.get('/regioes', controller.listaRegioes);

app.get('/regioes/show/:codigo', controller.mostraRegiao);

app.get('/regioes/update/:codigo', controller.alterarRegiaoForm);
app.post('/regioes/update/save', controller.alterarRegiao);

app.get('/regioes/add', controller.regiaoForm);
app.post('/regioes/add/save', controller.inserirRegiao);

app.get('/regioes/delete/:codigo', controller.removeRegiao);