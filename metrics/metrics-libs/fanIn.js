function computeFanIn(files){

    const fanInMap = {};

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
