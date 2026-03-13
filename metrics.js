/*
    Κεντρικό αρχείο του analyzer.

    Ροή εκτέλεσης:

    1. Φορτώνουμε το Angular project.
    2. Διαβάζουμε όλα τα TypeScript files.
    3. Για κάθε αρχείο υπολογίζουμε metrics.
    4. Για κάθε class εφαρμόζουμε κανόνες refactoring.
*/

const { loadProject } = require("./parser");
const { analyzeFile } = require("./metrics/fileMetrics");
const { checkClassRefactor } = require("./rules");
const { computeFanIn } = require("./metrics/libs/fanIn");


// path του Angular project
const files = loadProject("D:/arx.net/github/PROJECT/GREEK SPOT PROJECT/CMS/greekspot_cms/src/**/*.ts");

console.log("\nΗ ανάλυση άρχισε...");

const fanInMap = computeFanIn(files);
files.forEach(file => {

    console.log("Analyzing:", file.getBaseName());
    
    const metrics = analyzeFile(file, fanInMap);

    metrics.classes.forEach(cls => {

        const warnings = checkClassRefactor(cls);

        if (warnings.length > 0) {
            console.log("\n*****************************************************")
            console.log("\nClass:", cls.name);
            console.log("NOM:", cls.NOM);
            console.log("WMC:", cls.WMC);            
            console.log("DIT", cls.DIT);
            console.log("CBO", cls.CBO);
            console.log("RFC", cls.RFC);           
            console.log("LCOM", cls.LCOM);
            console.log("FanOut", cls.FanOut);
            console.log("FanIn", cls.FanIn);
            console.log("Warnings:", warnings.join(", "));
            console.log("\n*****************************************************")

        }

    });

});

console.log("\nΗ ανάλυση ολοκληρώθηκε");