const { getComplexity } = require("../complexity");

/*
    WMC (Weighted Methods per Class)

    Υπολογίζει την πολυπλοκότητα μιας κλάσης
    αθροίζοντας την Cyclomatic Complexity
    όλων των methods της.

    Όσο μεγαλύτερη η τιμή τόσο πιο
    δύσκολη η συντήρηση της κλάσης.

    Υψηλή τιμή μπορεί να δείχνει:
    - πολύπλοκη business logic
    - ανάγκη refactoring.
*/

function getWMC(cls){

    if(!cls) return 0;

    let complexity = 0;

    cls.getMethods().forEach(method => {
        complexity += getComplexity(method);
    });

    return complexity;
}

module.exports = { getWMC };