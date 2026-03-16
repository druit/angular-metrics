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
function getWMCstar(cls) {
    return getWMC(cls) / getNOM(cls);
}

module.exports = { getWMC, getWMCstar };