/*
    LCOM (Lack Of Cohesion in Methods)

    Μετρά τη συνοχή των methods
    μέσα σε μια κλάση.

    Εξετάζει αν τα methods
    χρησιμοποιούν τα ίδια properties.

    Χαμηλή συνοχή σημαίνει ότι
    τα methods πιθανόν
    ανήκουν σε διαφορετικές ευθύνες.

    Υψηλό LCOM μπορεί να δείχνει:

    - ανάγκη διάσπασης της κλάσης
    - πιθανή God Class.
*/
function getLCOM(cls) {

    const methods = cls.getMethods();
    const properties = cls.getProperties();

    let shared = 0;

    methods.forEach(method => {

        properties.forEach(prop => {

            if(method.getText().includes(prop.getName())){
                shared++;
            }

        });

    });

    if(methods.length === 0) return 0;

    return shared / methods.length;
}

module.exports = { getLCOM };