function getCBO(cls){

    const sourceFile = cls.getSourceFile();

    const imports = sourceFile.getImportDeclarations();

    const uniqueImports = new Set();

    imports.forEach(i => {

        i.getNamedImports().forEach(n => {
            uniqueImports.add(n.getName());
        });

    });

    return uniqueImports.size;
}


module.exports = { getCBO };