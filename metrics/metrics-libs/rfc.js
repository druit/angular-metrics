/*
    RFC (Response For Class)

    Μετρά τον αριθμό των methods
    που μπορεί να εκτελεστούν
    ως απάντηση σε ένα μήνυμα
    προς την κλάση.

    Περιλαμβάνει:

    - τα methods της κλάσης
    - methods που καλούνται
      μέσα από αυτά.

    Υψηλό RFC σημαίνει
    υψηλή πολυπλοκότητα συμπεριφοράς.
*/

function getRFC(cls) {

    const methods = cls.getMethods();

    const calledMethods = new Set();

    methods.forEach(method => {

        method.forEachDescendant(node => {

            if(node.getKindName() === "CallExpression"){

                const text = node.getExpression().getText();
                calledMethods.add(text);

            }

        });

    });

    return methods.length + calledMethods.size;
}

module.exports = { getRFC };