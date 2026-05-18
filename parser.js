const { Project } = require("ts-morph");

/*
    Φορτώνει το Angular / TypeScript project.

    Δημιουργεί ένα ts-morph Project και
    διαβάζει όλα τα .ts αρχεία από το path που δίνουμε.

    Επιστρέφει έναν πίνακα με SourceFile objects
    ώστε να τα αναλύσουμε αργότερα για metrics.
*/

function loadProject(path) {

    const project = new Project({
        skipAddingFilesFromTsConfig: true
    });

    project.addSourceFilesAtPaths(path);

    // Angular file keywords
    const allowed = [
        "component",
        "service",
        "guard",
        "interceptor",
        "directive",
        "pipe"
        // "module"
    ];

    const files = project.getSourceFiles().filter(file => {

        const fileName = file.getBaseName().toLowerCase();

        return (
            fileName.endsWith(".ts") &&
            !fileName.endsWith(".spec.ts") &&
            allowed.some(type => fileName.includes(type))
        );
    });

    return files;
}

module.exports = { loadProject };