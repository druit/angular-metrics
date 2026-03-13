const { getComplexity } = require("./complexity");
const { getLCOM } = require("./libs/lcom");
const { getDIT } = require("./libs/dit");
const { getCBO } = require("./libs/cbo");
const { getRFC } = require("./libs/rfc");
const { getFanOut } = require("./libs/fanOut");

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

function analyzeClass(cls, fanInMap){

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
        DIT: getDIT(cls),
        CBO: getCBO(cls),
        RFC: getRFC(cls),        
        LCOM: getLCOM(cls),
        FanOut: getFanOut(cls),
        FanIn: fanInMap[cls.getName()] || 0
    };

    return metrics;
}

module.exports = { analyzeClass };