/*
    CBO (Coupling Between Objects)

    Μετρά πόσες άλλες κλάσεις
    χρησιμοποιεί η συγκεκριμένη κλάση.

    Ο υπολογισμός γίνεται
    εξετάζοντας τα import declarations.

    Υψηλό CBO σημαίνει:
    - ισχυρή εξάρτηση από άλλες κλάσεις
    - δυσκολία επαναχρησιμοποίησης.
*/
function getCBO(cls) {

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