/*
    Απλοί κανόνες για να εντοπίσουμε
    πιθανά σημεία που χρειάζονται refactoring.

    Παραδείγματα:

    - πολύ υψηλή πολυπλοκότητα
    - πάρα πολλά methods σε μία class
*/

function checkClassRefactor(metrics){

    const warnings = [];

    if(metrics.WMC > 20){
        warnings.push("Υψηλή πολυπλοκότητα κλάσης");
    }

    if(metrics.NOM > 10){
        warnings.push("Πάρα πολλά methods στην κλάση");
    }

    return warnings;
}

module.exports = { checkClassRefactor };