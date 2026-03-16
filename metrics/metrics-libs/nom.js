/*
    NOM (Number Of Methods)

    Μετρά τον συνολικό αριθμό methods που έχει μία κλάση.

    Είναι ένα απλό metric μεγέθους.

    Υψηλή τιμή μπορεί να δείχνει:
        - μεγάλη κλάση
        - πιθανή παραβίαση του
          Single Responsibility Principle.

    Παράδειγμα:

        class MenuManagerComponent {

            loadMenu(){}
            saveMenu(){}
            updateMenu(){}
            deleteMenu(){}
            filterMenu(){}

        }

        NOM = 5
*/

function getNOM(cls){

    if(!cls) return 0;

    return cls.getMethods().length;
}

module.exports = { getNOM };