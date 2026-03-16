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
const { computeFanIn } = require("./metrics/metrics-libs/fanIn");
const { createCSV } = require("./metrics/createCSV");


// path του Angular project
const files = loadProject("D:/arx.net/github/PROJECT/GREEK SPOT PROJECT/CMS/greekspot_cms/src/**/*.ts");

console.log("\nΗ ανάλυση άρχισε...");

const fanInMap = computeFanIn(files);
const allClasses = [];

files.forEach(file => {

    console.log("Analyzing:", file.getBaseName());
    
    const metrics = analyzeFile(file, fanInMap);   
    
    metrics.classes.forEach(cls => {

        const warnings = checkClassRefactor(cls);

        allClasses.push(cls);
        
        if (warnings.length > 0) {
            console.log("\n*****************************************************")
            console.log("\nClass:", cls.name);
            // -------------------------
            console.log("LOC:", cls.LOC);
            console.log("SLOC:", cls.SLOC);
            // -------------------------
            console.log("NOM:", cls.NOM);
            console.log("NOP:", cls.NOP);
            console.log("NPM:", cls.NPM);
            // -------------------------
            console.log("WMC:", cls.WMC);      
            console.log("WMC*:", cls.WMCstar);
            // -------------------------
            console.log("DIT", cls.DIT);
            console.log("CBO", cls.CBO);
            console.log("RFC", cls.RFC);           
            console.log("LCOM", cls.LCOM);
            // -------------------------
            console.log("FanOut", cls.FanOut);
            console.log("FanIn", cls.FanIn);
            // -------------------------
            console.log("Warnings:", warnings.join(", "));
            console.log("\n*****************************************************")

        }

    });

});
// Create CSV file
createCSV(allClasses);

console.log("\nΗ ανάλυση ολοκληρώθηκε.");