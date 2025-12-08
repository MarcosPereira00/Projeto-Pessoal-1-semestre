var tentativaModel = require("../models/tentativaModel");

function registrar(req, res) {

    var fkUsuarios = req.body.fkUsuarios;
    var fkQuiz = req.body.fkQuiz;

    var pirata = req.body.alternativaPirata;
    var marinha = req.body.alternativaMarinha;
    var revolucionario = req.body.alternativaRevolucionarios;

    tentativaModel.registrarTentativa(fkUsuarios, fkQuiz, pirata, marinha, revolucionario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function estatisticas(req, res) {
    var fkQuiz = req.params.fkQuiz;

    tentativaModel.obterEstatisticas(fkQuiz)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function tentativasUsuario(req, res) {
    var fkUsuarios = req.params.fkUsuarios;

    tentativaModel.contarTentativasUsuario(fkUsuarios)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function contagemUsuarios(req, res) {
    tentativaModel.contagemUsuarios()
        .then(resultado => {
            res.json(resultado[0]);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    registrar,
    estatisticas,
    tentativasUsuario,
    contagemUsuarios
    
};