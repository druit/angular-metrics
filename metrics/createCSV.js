const fs = require("fs");

/*
    Δημιουργεί CSV αρχείο με όλα τα metrics

    Το CSV περιέχει:
        -  LOC
        -  SLOC
        -  NOM
        -  NOP
        -  NPM
        -  WMC
        -  DIT
        -  CBO
        -  RFC
        -  LCOM
        -  FanOut
        -  FanIn
    =================
        - SUM
        - AVERAGE
        - MAX
*/

function getStats(values){

    const sum = values.reduce((a,b) => a + b, 0);
    const avg = values.length ? sum / values.length : 0;
    const max = values.length ? Math.max(...values) : 0;

    return { sum, avg, max };
}

function createCSV(classes, fileName = "metrics.csv"){

    const csvRows = [];

    // header
    csvRows.push([
        "Class",
        "LOC",
        "SLOC",
        "NOM (SIZE1)",
        "NOP (SIZE2)",
        "NPM",
        "WMC",
        "WMC* (AMC)",
        "DIT",
        "CBO",
        "RFC",
        "LCOM",
        "FanOut",
        "FanIn"
    ].join(","));

    const stats = {
        LOC: [],
        SLOC: [],
        NOM: [],
        NOP: [],
        NPM: [],
        WMC: [],
        WMCStar: [],
        DIT: [],
        CBO: [],
        RFC: [],
        LCOM: [],
        FanOut: [],
        FanIn: []
    };

    classes.forEach(cls => {

        csvRows.push([
            cls.name,
            cls.LOC,
            cls.SLOC,
            cls.NOM,
            cls.NOP,
            cls.NPM,
            cls.WMC,
            cls.WMCStar,
            cls.DIT,
            cls.CBO,
            cls.RFC,
            cls.LCOM,
            cls.FanOut,
            cls.FanIn
        ].join(","));

        stats.LOC.push(cls.LOC);
        stats.SLOC.push(cls.SLOC);
        // ---------------------
        stats.NOM.push(cls.NOM);
        stats.NOP.push(cls.NOP);
        stats.NPM.push(cls.NPM);
        // ---------------------
        stats.WMC.push(cls.WMC);
        stats.WMCStar.push(cls.WMCStar);
        // ---------------------
        stats.DIT.push(cls.DIT);
        stats.CBO.push(cls.CBO);
        stats.RFC.push(cls.RFC);
        stats.LCOM.push(cls.LCOM);
        // ---------------------
        stats.FanOut.push(cls.FanOut);
        stats.FanIn.push(cls.FanIn);
    });

    csvRows.push("");

    var maxMetrics = [];
    var averageMetrics = [];
    var sumMetrics = [];
    const metricsArray = ["LOC","SLOC","NOM","NOP","NPM","WMC","WMCStar","DIT","CBO","RFC","LCOM","FanOut","FanIn"];

    metricsArray.forEach(metric => {
        const { sum, avg, max } = getStats(stats[metric]);
        sumMetrics.push(sum);
        averageMetrics.push(avg);
        maxMetrics.push(max);

    });

    csvRows.push([
        "SUM",
        sumMetrics,
    ].join(","));

    csvRows.push([
        "AVERAGE",
        averageMetrics,
    ].join(","));

    csvRows.push([
        "MAX",
        maxMetrics,
    ].join(","));

    fs.writeFileSync(fileName, csvRows.join("\n"));

    console.log(`\nCSV δημιουργήθηκε: ${fileName}`);
}

module.exports = { createCSV };