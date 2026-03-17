/*
    MPC (Message Passing Coupling)

    Μετρά τον αριθμό των method calls που
    κάνει μια κλάση προς άλλες κλάσεις.

    Δείχνει πόση επικοινωνία έχει η κλάση
    με το υπόλοιπο σύστημα.

    Παράδειγμα:

        this.blogService.getPosts()
        this.blogService.savePost()

        MPC = 2
*/

function getMPC(cls){

    if(!cls) return 0;

    const methods = cls.getMethods();

    let count = 0;

    methods.forEach(method => {

        method.forEachDescendant(node => {

            if(node.getKindName() === "CallExpression"){
                count++;
            }

        });

    });

    return count;
}

module.exports = { getMPC };