const express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-tentativas", function (req, res) {
    dashboardController.totalTentativas(req, res);
});

router.get("/media-por-faccao", function (req, res) {
    dashboardController.mediaPorFaccao(req, res);
});


module.exports = router;

