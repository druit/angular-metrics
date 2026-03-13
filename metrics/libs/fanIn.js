function computeFanIn(files){

    const fanInMap = {};

    // όλες οι κλάσεις του project
    const projectClasses = new Set();

    files.forEach(file => {
        file.getClasses().forEach(cls => {
            projectClasses.add(cls.getName());
        });
    });

    files.forEach(file => {

        const imports = file.getImportDeclarations();

        imports.forEach(i => {

            i.getNamedImports().forEach(n => {

                const name = n.getName();

                // μετράμε μόνο αν είναι class του project
                if(projectClasses.has(name)){

                    if(!fanInMap[name]){
                        fanInMap[name] = 0;
                    }

                    fanInMap[name]++;

                }

            });

        });

    });

    return fanInMap;
}

module.exports = { computeFanIn };


//


// function computeFanIn(files){

//     const fanInMap = {};
//     const projectClasses = new Set();

//     // decorators που θέλουμε να αναλύουμε
//     const allowedDecorators = [
//         "Component",
//         "Injectable",
//         "Directive",
//         "Pipe",
//         "Guard",
//         "Interceptor"
//     ];

//     // βρίσκουμε μόνο τις Angular classes που μας ενδιαφέρουν
//     files.forEach(file => {

//         file.getClasses().forEach(cls => {

//             const decorators = cls.getDecorators().map(d => d.getName());

//             const isAllowed = decorators.some(d => allowedDecorators.includes(d));

//             if(isAllowed){
//                 projectClasses.add(cls.getName());
//             }

//         });

//     });

//     // υπολογισμός FanIn
//     files.forEach(file => {

//         const imports = file.getImportDeclarations();

//         imports.forEach(i => {

//             i.getNamedImports().forEach(n => {

//                 const name = n.getName();

//                 // μετράμε μόνο classes που ανήκουν στο project
//                 if(projectClasses.has(name)){

//                     if(!fanInMap[name]){
//                         fanInMap[name] = 0;
//                     }

//                     fanInMap[name]++;

//                 }

//             });

//         });

//     });

//     return fanInMap;
// }

// module.exports = { computeFanIn };