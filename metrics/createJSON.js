const fs = require("fs");
const path = require("path");

function createJSONReport(projectName, classesMetrics) {

    const outputDir = path.join(__dirname, "./../output");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const typeStats = calculateTypeStats(classesMetrics);

    const smellStats = calculateSmellStats(classesMetrics);

    const result = {
        project: projectName,
        generatedAt: new Date().toISOString(),
        summary: {
            totalClasses: classesMetrics.length,
            totalLOC: classesMetrics.reduce((sum, c) => sum + c.LOC, 0),
            averageWMC: classesMetrics.length > 0 ? classesMetrics.reduce((sum, c) => sum + c.WMC, 0) / classesMetrics.length : 0,
            averageRFC: classesMetrics.length > 0 ? classesMetrics.reduce((sum, c) => sum + c.RFC, 0) / classesMetrics.length : 0,
            types: typeStats,
            smells: smellStats
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


function calculateTypeStats(classesMetrics) {

    const typeStats = {
        components: 0,
        services: 0,
        guards: 0,
        interceptors: 0,
        directives: 0,
        pipes: 0,
        unknown: 0
    };

    classesMetrics.forEach(cls => {

        switch (cls.type) {

            case "component":
                typeStats.components++;
                break;

            case "service":
                typeStats.services++;
                break;

            case "guard":
                typeStats.guards++;
                break;

            case "interceptor":
                typeStats.interceptors++;
                break;

            case "directive":
                typeStats.directives++;
                break;

            case "pipe":
                typeStats.pipes++;
                break;

            default:
                typeStats.unknown++;
        }
    });

    return typeStats;
}

function calculateSmellStats(classesMetrics) {

    const smellStats = {};

    classesMetrics.forEach(cls => {

        if (cls.smells) {

            cls.smells.forEach(smell => {

                if (!smellStats[smell]) {
                    smellStats[smell] = 0;
                }

                smellStats[smell]++;
            });
        }
    });

    return smellStats;
}

module.exports = { createJSONReport };