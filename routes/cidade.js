const controller = require('../controllers/cidadeController');

app.get('/cidades', controller.listaCidades);

app.get('/cidades/show/:codigo', controller.mostraCidade);

app.get('/cidades/update/:codigo', controller.alterarCidForm);
app.post('/cidades/update/save', controller.alterarCidade);

app.get('/cidades/add', controller.cidadesForm);
app.post('/cidades/add/save', controller.inserirCidade);

app.get('/cidades/delete/:codigo', controller.removeCidade);