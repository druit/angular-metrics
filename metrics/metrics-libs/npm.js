/*
    NPM (Number Of Public Methods)

    Μετρά τον αριθμό των public methods
    που έχει μια κλάση.

    Δείχνει πόσο μεγάλο είναι το public API
    της κλάσης.

    Υψηλό NPM μπορεί να σημαίνει:
        - μεγάλη δημόσια διεπαφή
        - αυξημένη πολυπλοκότητα χρήσης.

    Παράδειγμα:

        class BlogService {

            public getPosts(){}
            public savePost(){}

            private validate(){}

        }

        NPM = 2
*/

function getNPM(cls){

    if(!cls) return 0;

    const methods = cls.getMethods();

    let count = 0;

    methods.forEach(method => {

        if(method.getScope() === "public" || method.getScope() === undefined){
            count++;
        }

    });

    return count;

}

module.exports = { getNPM };