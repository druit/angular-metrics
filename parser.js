const { Project } = require("ts-morph");

/*
    Φορτώνει το Angular / TypeScript project.

    Δημιουργεί ένα ts-morph Project και
    διαβάζει όλα τα .ts αρχεία από το path που δίνουμε.

    Επιστρέφει έναν πίνακα με SourceFile objects
    ώστε να τα αναλύσουμε αργότερα για metrics.
*/

function loadProject(path){

    const project = new Project({
        skipAddingFilesFromTsConfig: true
    });

    // προσθέτουμε όλα τα ts αρχεία
    project.addSourceFilesAtPaths(path);

    // αγνοούμε declaration files (.d.ts)
    const allowed = [
        ".component.ts",
        ".service.ts",
        ".guard.ts",
        ".interceptor.ts",
        ".directive.ts",
        ".pipe.ts",
        ".module.ts"
    ];

    const files = project.getSourceFiles().filter(file => allowed.some(type => file.getBaseName().endsWith(type)));
    
    return files;
}

module.exports = { loadProject };