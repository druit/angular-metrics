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
const { createJSONReport } = require("./metrics/createJSON");
const { computeNOCC } = require("./metrics/metrics-libs/nocc");

const { getAngularType } = require("./utils/angularType");

// path του Angular project
// const files = loadProject("D:/arx.net/github/PROJECT/GREEK SPOT PROJECT/CMS/greekspot_cms/src/**/*.ts");

const path = require("path");

const projectPath = process.argv[2];

if (!projectPath) {
    console.error("Please provide Angular project path.");
    process.exit(1);
}

const projectName = path.basename(projectPath);

const tsPattern = `${projectPath}/src/**/*.ts`;

const files = loadProject(tsPattern);


console.log("\nΗ ανάλυση άρχισε...");

const fanInMap = computeFanIn(files);
const noccMap = computeNOCC(files);
const allClasses = [];
const jsonClasses = [];

files.forEach(file => {

    console.log("Analyzing:", file.getBaseName());
    
    const metrics = analyzeFile(file, fanInMap, noccMap);   
    
    metrics.classes.forEach(cls => {

        const warnings = checkClassRefactor(cls);

        allClasses.push(cls);
        
        jsonClasses.push({
            ...cls,
            type: getAngularType(file.getBaseName()),
            smells: warnings
        });
        
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
            console.log("MPC:", cls.MPC);
            // -------------------------
            console.log("FanOut", cls.FanOut);
            console.log("FanIn", cls.FanIn);
            // -------------------------
            console.log("NOCC", cls.NOCC);
            console.log("DAC", cls.DAC);
            // ---------------------------------
            console.log("Warnings:", warnings.join(", "));
            console.log("\n*****************************************************")

        }

    });

});
// Create CSV file
createCSV(allClasses);

// Create JSON file
createJSONReport(projectName, jsonClasses);

console.log("\nΗ ανάλυση ολοκληρώθηκε.");