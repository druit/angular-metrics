/*
    FanIn

    Μετρά πόσες άλλες κλάσεις χρησιμοποιούν τη συγκεκριμένη κλάση.

    Υπολογίζεται εξετάζοντας όλα τα import statements
    του project και καταγράφοντας πόσες φορές γίνεται import η κλάση.

    Υψηλό FanIn σημαίνει:
        - η κλάση χρησιμοποιείται ευρέως
        - αποτελεί κεντρικό σημείο λειτουργικότητας.

    Παράδειγμα:

        ComponentA → AuthService
        ComponentB → AuthService
        ComponentC → AuthService

    Για την κλάση AuthService:

        FanIn = 3
*/

function computeFanIn(files) {

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
