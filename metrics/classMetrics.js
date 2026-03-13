const { getComplexity } = require("./complexity");

/*
    Αναλύει μία class και υπολογίζει βασικά
    Object-Oriented metrics.

    Metrics που υπολογίζονται:

    NOM (Number Of Methods)
    πόσα methods έχει η class.

    WMC (Weighted Methods per Class)
    άθροισμα της πολυπλοκότητας όλων των methods.

    DIT (Depth of Inheritance Tree)
    αν η class κληρονομεί από άλλη class.
*/

function getDIT(cls){

    // αν δεν υπάρχει class επιστρέφουμε 0
    if(!cls){
        return 0;
    }

    // αν το node δεν έχει getBaseClass (π.χ interface)
    if(typeof cls.getBaseClass !== "function"){
        return 0;
    }

    var depth = 0;
    if (cls.getBaseClass){
        var base = cls.getBaseClass();

        while(base){
            depth++;
            base = base.getBaseClass ? base.getBaseClass() : null;
        }
    }

    return depth;
}

function analyzeClass(cls){

    if(!cls){
        return {
            name: "Unknown",
            NOM: 0,
            WMC: 0,
            DIT: 0
        };
    }

    const methods = cls.getMethods();

    let wmc = 0;
    // υπολογίζουμε complexity για κάθε method
    methods.forEach(method => {
        wmc += getComplexity(method);
    });

    const metrics = {
        name: cls.getName() || "AnonymousClass",
        NOM: methods.length,
        WMC: wmc,
        DIT: getDIT(cls)
    };

    return metrics;
}

module.exports = { analyzeClass };