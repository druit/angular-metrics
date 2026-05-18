const fs = require("fs");
const path = require("path");

function createJSONReport(projectName, classesMetrics) {

    const outputDir = path.join(__dirname, "./../output");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = {
        project: projectName,
        generatedAt: new Date().toISOString(),

        summary: {
            totalClasses: classesMetrics.length
        },

        classes: classesMetrics
    };
    const outputPath =  path.join(outputDir, "metrics-report.json")
    fs.writeFileSync(
       outputPath,
        JSON.stringify(result, null, 2)
    );

    console.log(`\nJSON report δημιουργήθηκε: ${outputPath}`);
}

module.exports = { createJSONReport };