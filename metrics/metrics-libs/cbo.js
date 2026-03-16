/*
    CBO (Coupling Between Objects)

    Μετρά πόσες άλλες κλάσεις χρησιμοποιεί η συγκεκριμένη κλάση.

    Ο υπολογισμός γίνεται εξετάζοντας τα import declarations
    του αρχείου στο οποίο βρίσκεται η κλάση.

    Υψηλό CBO σημαίνει:
        - ισχυρή εξάρτηση από άλλες κλάσεις
        - δυσκολία επαναχρησιμοποίησης
        - πιθανή υψηλή πολυπλοκότητα στο σύστημα.

    Παράδειγμα:

        import { AuthService } from "./auth.service";
        import { BlogService } from "./blog.service";
        import { HttpClient } from "@angular/common/http";

    Αν μια κλάση χρησιμοποιεί τις παραπάνω 3 κλάσεις:

        CBO = 3
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