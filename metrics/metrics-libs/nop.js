/*
    NOP (Number Of Properties)

    Μετρά τον αριθμό των properties (fields)
    που υπάρχουν σε μια κλάση.

    Δείχνει πόσα δεδομένα διαχειρίζεται η κλάση.

    Υψηλό NOP μπορεί να σημαίνει:
        - data heavy class
        - πιθανή God Class.

    Παράδειγμα:

        class UserService {

            users = []
            orders = []
            products = []

        }

        NOP = 3
*/

function getNOP(cls){

    if(!cls) return 0;

    return cls.getProperties().length;

}

module.exports = { getNOP };