/*
    Rules / Thresholds για εντοπισμό πιθανών code smells
    με βάση τα metrics της κλάσης.
*/

const thresholds = {
    LOC: 300,
    NOM: 10,
    NOP: 15,
    WMC: 20,
    RFC: 50,
    CBO: 10,
    MPC: 20,
    FanIn: 10,
    FanOut: 5,
    DIT: 3,
    NOCC: 5,
    DAC: 5,
    LCOM: 1.5
};

function checkClassRefactor(metrics){

    const warnings = [];

    // Μεγάλο αρχείο / component
    if(metrics.LOC > thresholds.LOC){
        warnings.push("Large File");
    }

    // Μεγάλη κλάση
    if(metrics.NOM > thresholds.NOM){
        warnings.push("Large Class");
    }

    // Πάρα πολλά properties
    if(metrics.NOP > thresholds.NOP){
        warnings.push("Too Many Properties");
    }

    // Υψηλή πολυπλοκότητα
    if(metrics.WMC > thresholds.WMC){
        warnings.push("High Complexity");
    }

    // Μεγάλο response set
    if(metrics.RFC > thresholds.RFC){
        warnings.push("High RFC");
    }

    // Υψηλό coupling
    if(metrics.CBO > thresholds.CBO){
        warnings.push("High Coupling");
    }

    // Υψηλό message passing
    if(metrics.MPC > thresholds.MPC){
        warnings.push("High Message Passing");

    }

    // Υψηλό FanIn
    if(metrics.FanIn > thresholds.FanIn){
        warnings.push("High FanIn");
    }

    // Πολλές εξαρτήσεις
    if(metrics.FanOut > thresholds.FanOut){
        warnings.push("High FanOut");
    }

    // Μεγάλο inheritance depth
    if(metrics.DIT > thresholds.DIT){
        warnings.push("Deep Inheritance Tree");
    }

    // Πάρα πολλές child classes
    if(metrics.NOCC > thresholds.NOCC){
        warnings.push("Too Many Child Classes");
    }

    // Υψηλό data abstraction coupling
    if(metrics.DAC > thresholds.DAC){
        warnings.push("High Data Coupling");
    }

    // Χαμηλή συνοχή
    if(metrics.LCOM > thresholds.LCOM){
        warnings.push("Low Cohesion");
    }

    return warnings;
}

module.exports = {
    checkClassRefactor,
    thresholds
};