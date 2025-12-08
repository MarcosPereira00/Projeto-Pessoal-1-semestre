var dashboardModel = require("../models/tentativaModel");


function totalTentativas(req, res) {
    dashboardModel.totalTentativas()
        .then(resultado => {
            res.json(resultado[0]);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function mediaPorFaccao(req, res) {
    dashboardModel.mediaPorFaccao()
        .then(resultado => {
            res.json(resultado[0]);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    totalTentativas,
    mediaPorFaccao
};
