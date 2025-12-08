var database = require("../database/config");

function registrarTentativa(fkUsuarios, fkQuiz, pirata, marinha, revolucionario) {
    var instrucaoSql = `
        INSERT INTO Tentativa 
        (fkUsuarios, fkQuiz, alternativaPirata, alternativaMarinha, alternativaRevolucionarios)
        VALUES (${fkUsuarios}, ${fkQuiz}, ${pirata}, ${marinha}, ${revolucionario});
    `;
    return database.executar(instrucaoSql);
}


function contagemUsuarios() {
    var instrucaoSql = `
        SELECT 
            SUM(grupo = 'pirata') AS pirata,
            SUM(grupo = 'marinha') AS marinha,
            SUM(grupo = 'revolucionario') AS revolucionario
        FROM (
            SELECT 
                fkUsuarios,
                CASE
                    WHEN SUM(alternativaPirata) > SUM(alternativaMarinha)
                     AND SUM(alternativaPirata) > SUM(alternativaRevolucionarios) THEN 'pirata'
                    WHEN SUM(alternativaMarinha) > SUM(alternativaPirata)
                     AND SUM(alternativaMarinha) > SUM(alternativaRevolucionarios) THEN 'marinha'
                    ELSE 'revolucionario'
                END AS grupo
            FROM Tentativa
            GROUP BY fkUsuarios
        ) AS resultados;
    `;
    return database.executar(instrucaoSql);
}


function mediaPorFaccao() {
    var instrucaoSql = `
        SELECT
            AVG(alternativaPirata) AS pirata,
            AVG(alternativaMarinha) AS marinha,
            AVG(alternativaRevolucionarios) AS revolucionario
        FROM Tentativa;
    `;
    return database.executar(instrucaoSql);
}

function totalTentativas() {
    var instrucaoSql = `
        SELECT COUNT(*) AS total FROM Tentativa;
    `;
    return database.executar(instrucaoSql);
}




module.exports = {
    registrarTentativa,
    contagemUsuarios,
    mediaPorFaccao,
    totalTentativas
};
