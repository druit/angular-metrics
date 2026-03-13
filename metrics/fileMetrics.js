const { analyzeClass } = require("./classMetrics");

/*
    Αναλύει ένα αρχείο TypeScript.

    Metrics που υπολογίζονται:

    LOC (Lines Of Code)
    αριθμός γραμμών κώδικα.

    Classes
    πόσες classes περιέχει το αρχείο.

    Methods
    πόσα methods συνολικά υπάρχουν.
*/

function analyzeFile(file){

    const loc = file.getFullText().split(/\r?\n/).length;

    const metrics = {
        name: file.getBaseName(),
        loc: loc,
        classes: [],
        methods: 0
    };

    const classes = file.getClasses().filter(c => c.getName());

    classes.forEach(cls => {

        const clsMetrics = analyzeClass(cls);

        metrics.classes.push(clsMetrics);
        metrics.methods += clsMetrics.NOM;

    });

    return metrics;
}

module.exports = { analyzeFile };