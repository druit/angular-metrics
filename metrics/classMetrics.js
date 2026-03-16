const { getWMC } = require("./metrics-libs/wmc");
const { getLCOM } = require("./metrics-libs/lcom");
const { getDIT } = require("./metrics-libs/dit");
const { getCBO } = require("./metrics-libs/cbo");
const { getRFC } = require("./metrics-libs/rfc");
const { getFanOut } = require("./metrics-libs/fanOut");
const { getNOM } = require("./metrics-libs/nom");

/*
    Αναλύει μία class και υπολογίζει Object-Oriented metrics.

    Τα metrics αυτά χρησιμοποιούνται στη στατική ανάλυση κώδικα
    για να εκτιμήσουμε την ποιότητα του σχεδιασμού και την
    πολυπλοκότητα του συστήματος.

    Metrics που υπολογίζονται:

    NOM (Number Of Methods)
    --------------------------------
    Ο αριθμός των methods που υπάρχουν στην κλάση.

    WMC (Weighted Methods per Class)
    --------------------------------
    Το άθροισμα της πολυπλοκότητας όλων των methods της κλάσης.
    Συνήθως βασίζεται στην Cyclomatic Complexity κάθε method.

    DIT (Depth of Inheritance Tree)
    --------------------------------
    Το βάθος της κληρονομικότητας της κλάσης.
    Δηλαδή πόσες κλάσεις υπάρχουν στην ιεραρχία
    μέχρι τη ρίζα.

    CBO (Coupling Between Objects)
    --------------------------------
    Μετρά πόσες άλλες κλάσεις χρησιμοποιεί
    η συγκεκριμένη κλάση μέσω imports ή αναφορών.

    RFC (Response For Class)
    --------------------------------
    Ο συνολικός αριθμός methods που μπορεί να
    εκτελεστούν ως απάντηση σε ένα μήνυμα προς
    την κλάση.

    Περιλαμβάνει:
    - τα methods της κλάσης
    - methods που καλούνται μέσα σε αυτά.

    LCOM (Lack of Cohesion in Methods)
    --------------------------------
    Μετρά τη συνοχή της κλάσης.

    Υψηλή τιμή σημαίνει ότι τα methods της κλάσης
    χρησιμοποιούν διαφορετικά properties και
    πιθανόν η κλάση θα πρέπει να διασπαστεί.

    FanOut
    --------------------------------
    Μετρά πόσες εξαρτήσεις έχει η κλάση
    προς άλλες κλάσεις.

    Στο Angular συνήθως αντιστοιχεί στις
    εξαρτήσεις που γίνονται inject μέσω
    του constructor.

    FanIn
    --------------------------------
    Μετρά πόσες άλλες κλάσεις χρησιμοποιούν
    τη συγκεκριμένη κλάση.

    Υπολογίζεται εξετάζοντας τα imports
    σε όλα τα αρχεία του project.
*/

function analyzeClass(cls, fanInMap){

    if(!cls){
        return {
            name: "Unknown",
            NOM: 0,
            WMC: 0,
            DIT: 0,
            CBO: 0,
            RFC: 0,        
            LCOM: 0,
            FanOut: 0,
            FanIn: 0
        };
    }

    const metrics = {
        name: cls.getName() || "AnonymousClass",
        NOM: getNOM(cls),
        WMC: getWMC(cls),
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