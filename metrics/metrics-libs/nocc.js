/*
    NOCC (Number Of Children Classes)

    Μετρά πόσες άλλες κλάσεις κληρονομούν από τη συγκεκριμένη κλάση.
    Δηλαδή πόσες subclasses έχει.

    Υψηλό NOCC σημαίνει:
        - η κλάση χρησιμοποιείται ως base class
        - πιθανή επαναχρησιμοποίηση
        - αλλά και πιθανή αυξημένη πολυπλοκότητα.

    Παράδειγμα:

        class BaseComponent {}

        class A extends BaseComponent {}
        class B extends BaseComponent {}
        class C extends BaseComponent {}

        NOCC(BaseComponent) = 3
*/

function getNOCC(cls, noccMap){

    if(!cls) return 0;

    const name = cls.getName();

    if(!name) return 0;

    return noccMap[name] || 0;
}

function computeNOCC(files){

    const parentMap = {};

    files.forEach(file => {
        file.getClasses().forEach(cls => {
            const base = cls.getBaseClass();
            if(base){
                const parent = base.getName();

                if(!parentMap[parent]){
                    parentMap[parent] = 0;
                }

                parentMap[parent]++;
            }
        });
    });

    return parentMap;
}

module.exports = { getNOCC, computeNOCC };