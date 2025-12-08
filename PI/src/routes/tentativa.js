var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/registrar", function (req, res) {
    tentativaController.registrar(req, res);
});

router.get("/estatisticas/:fkQuiz", function (req, res) {
    tentativaController.estatisticas(req, res);
});

router.get("/usuario/:fkUsuarios", function (req, res) {
    tentativaController.tentativasUsuario(req, res);
});

router.get("/contagemUsuarios", function (req, res) {
    tentativaController.contagemUsuarios(req, res);
});

module.exports = router;