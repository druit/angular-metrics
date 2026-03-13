/*
  Κανόνες για εντοπισμό πιθανών code smells
  με βάση τα metrics της κλάσης.
*/

function checkClassRefactor(metrics){

    const warnings = [];

    // πολλά methods -> πιθανό Large Class
    if(metrics.NOM > 10){
        warnings.push("Πάρα πολλά methods στην κλάση");
    }

    // υψηλή πολυπλοκότητα
    if(metrics.WMC > 20){
        warnings.push("Υψηλή πολυπλοκότητα κλάσης");
    }

    // μεγάλο response set
    if(metrics.RFC > 50){
        warnings.push("Μεγάλο response set (πολλές εξαρτήσεις methods)");
    }

    // υψηλό coupling
    if(metrics.CBO > 10){
        warnings.push("Υψηλό coupling με άλλες κλάσεις");
    }

    // πολλές εξαρτήσεις constructor
    if(metrics.FanOut > 5){
        warnings.push("Πολλές εξαρτήσεις (FanOut)");
    }

    // χαμηλή συνοχή
    if(metrics.LCOM > 1.5){
        warnings.push("Χαμηλή συνοχή μεταξύ των methods");
    }

    return warnings;
}

module.exports = { checkClassRefactor };