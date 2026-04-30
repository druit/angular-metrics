/*
    DAC (Data Abstraction Coupling)

    Μετρά πόσα πεδία (properties) μιας κλάσης
    έχουν τύπο άλλης κλάσης (custom types).

    Δηλαδή δείχνει πόσα "αντικείμενα" χρησιμοποιεί
    η κλάση μέσω των δεδομένων της.

    Υψηλό DAC σημαίνει:
        - ισχυρή εξάρτηση από άλλες κλάσεις
        - αυξημένο coupling μέσω δεδομένων.

    Παράδειγμα:

        class A {
            authService: AuthService;
            blogService: BlogService;
            count: number;
        }

        DAC = 2  (AuthService, BlogService)
*/

function getDAC(cls){

    if(!cls) return 0;

    const properties = cls.getProperties();

    const types = new Set();

    properties.forEach(prop => {

        const type = prop.getType().getText();

        // αγνοούμε primitive types
        if(
            type &&
            !type.includes("string") &&
            !type.includes("number") &&
            !type.includes("boolean")
        ){
            types.add(type);
        }

    });

    return types.size;
}

module.exports = { getDAC };