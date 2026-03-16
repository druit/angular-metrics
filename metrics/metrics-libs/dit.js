/*
    DIT (Depth of Inheritance Tree)

    Μετρά το βάθος της κληρονομικότητας
    μιας κλάσης.

    Δηλαδή πόσες superclasses υπάρχουν
    μέχρι τη ρίζα της ιεραρχίας.

    Υψηλό DIT σημαίνει:
    - βαθιά ιεραρχία
    - πιθανή αυξημένη πολυπλοκότητα.
*/

function getDIT(cls) {

    if(!cls){
        return 0;
    }

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

module.exports = { getDIT };