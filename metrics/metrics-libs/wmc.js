const { getComplexity } = require("../complexity");
const { getNOM } = require("./nom");

/*
    WMC (Weighted Methods per Class) or "Sum of << CC >> " 

    Μετρά την συνολική πολυπλοκότητα των methods μιας κλάσης.

    Υπολογίζεται ως το άθροισμα της κυκλωματικής πολυπλοκότητας
    (Cyclomatic Complexity) όλων των methods της κλάσης.

    Όσο μεγαλύτερο είναι το WMC τόσο πιο δύσκολη είναι
    η κατανόηση, συντήρηση και δοκιμή της κλάσης.

    Υψηλό WMC μπορεί να δείχνει:
        - πολύπλοκη επιχειρησιακή λογική
        - μεγάλη κλάση
        - πιθανή ανάγκη refactoring.

    Παράδειγμα:

        class MenuService {

            getMenu(){
                return this.menu;
            }

            filterMenu(type){
                if(type === "food"){
                    return this.menu.food;
                } else {
                    return this.menu.drinks;
                }
            }

        }

        Cyclomatic Complexity:

        getMenu() = 1
        filterMenu() = 2   (λόγω if)

        WMC = 1 + 2 = 3
*/

function getWMC(cls){

    if(!cls) return 0;

    let complexity = 0;

    cls.getMethods().forEach(method => {
        complexity += getComplexity(method);
    });

    return complexity;
}

/* 
    WMC* or AMC  

    WMC* = WMC / NOM
*/

/*
    WMC* / AMC / WAC (Weighted Average Complexity)

    Μετρά τον μέσο όρο πολυπλοκότητας των methods
    μιας κλάσης.

    Υπολογίζεται ως:

        WMC* = WMC / NOM

    όπου:
        WMC = συνολική πολυπλοκότητα (άθροισμα CC)
        NOM = αριθμός methods

    Το metric αυτό είναι επίσης γνωστό ως:

        - AMC (Average Method Complexity)
        - WAC (Weighted Average Complexity)

    Υψηλό WMC* σημαίνει:
        - τα methods είναι κατά μέσο όρο πολύπλοκα
        - αυξημένη δυσκολία κατανόησης και συντήρησης.

    Παράδειγμα:

        method1 → CC = 2
        method2 → CC = 4
        method3 → CC = 6

        WMC = 12
        NOM = 3

        WMC* = 12 / 3 = 4
*/
function getWMCstar(cls) {
    return getWMC(cls) / getNOM(cls);
}

module.exports = { getWMC, getWMCstar };