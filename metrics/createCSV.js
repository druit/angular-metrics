const fs = require("fs");
const path = require("path");

/*
    Δημιουργεί CSV αρχείο με όλα τα metrics

    Το CSV περιέχει:
        -  LOC
        -  SLOC
        -  NOM
        -  NOP
        -  NPM
        -  WMC
        -  WMC*
        -  DIT
        -  CBO
        -  RFC
        -  LCOM
        -  MPC
        -  FanOut
        -  FanIn
        -  ΝΟCC
        -  DAC
    =================
        - SUM
        - AVERAGE
        - MAX
*/

/*
    Δημιουργεί CSV αρχείο με όλα τα metrics
*/

function getStats(values){

    const sum = values.reduce((a,b) => a + b, 0);
    const avg = values.length ? sum / values.length : 0;
    const max = values.length ? Math.max(...values) : 0;

    return { sum, avg, max };
}

function createCSV(classes, fileName = "metrics.csv"){

    // Create output folder if it does not exist
    const outputDir = path.join(__dirname, "./../output");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

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
        "MPC",
        "FanOut",
        "FanIn",
        "NOCC",
        "DAC"
    ].join(","));

    const stats = {
        LOC: [],
        SLOC: [],
        NOM: [],
        NOP: [],
        NPM: [],
        WMC: [],
        WMCstar: [],
        DIT: [],
        CBO: [],
        RFC: [],
        LCOM: [],
        MPC: [],
        FanOut: [],
        FanIn: [],
        NOCC: [],
        DAC: [],
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
            cls.WMCstar,
            cls.DIT,
            cls.CBO,
            cls.RFC,
            cls.LCOM,
            cls.MPC,
            cls.FanOut,
            cls.FanIn,
            cls.NOCC,
            cls.DAC
        ].join(","));

        stats.LOC.push(cls.LOC);
        stats.SLOC.push(cls.SLOC);

        stats.NOM.push(cls.NOM);
        stats.NOP.push(cls.NOP);
        stats.NPM.push(cls.NPM);

        stats.WMC.push(cls.WMC);
        stats.WMCstar.push(cls.WMCstar);

        stats.DIT.push(cls.DIT);
        stats.CBO.push(cls.CBO);
        stats.RFC.push(cls.RFC);
        stats.LCOM.push(cls.LCOM);
        stats.MPC.push(cls.MPC);

        stats.FanOut.push(cls.FanOut);
        stats.FanIn.push(cls.FanIn);

        stats.NOCC.push(cls.NOCC);
        stats.DAC.push(cls.DAC);
    });

    csvRows.push("");

    const maxMetrics = [];
    const averageMetrics = [];
    const sumMetrics = [];

    const metricsArray = [
        "LOC","SLOC","NOM","NOP","NPM",
        "WMC","WMCstar","DIT","CBO",
        "RFC","LCOM","MPC","FanOut",
        "FanIn","NOCC","DAC"
    ];

    metricsArray.forEach(metric => {

        const { sum, avg, max } = getStats(stats[metric]);

        sumMetrics.push(sum);
        averageMetrics.push(avg);
        maxMetrics.push(max);

    });

    csvRows.push([
        "SUM",
        ...sumMetrics
    ].join(","));

    csvRows.push([
        "AVERAGE",
        ...averageMetrics
    ].join(","));

    csvRows.push([
        "MAX",
        ...maxMetrics
    ].join(","));

    const outputPath = path.join(outputDir, fileName);

    fs.writeFileSync(outputPath, csvRows.join("\n"));

    console.log(`\nCSV δημιουργήθηκε: ${outputPath}`);
}

module.exports = { createCSV };