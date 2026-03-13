function getDIT(cls){

    // αν δεν υπάρχει class επιστρέφουμε 0
    if(!cls){
        return 0;
    }

    // αν το node δεν έχει getBaseClass (π.χ interface)
    if(typeof cls.getBaseClass !== "function"){
        return 0;
    }

    var depth = 0;
    if (cls.getBaseClass){
        var base = cls.getBaseClass();

        while(base){
            depth++;
            base = base.getBaseClass ? base.getBaseClass() : null;
        }
    }

    return depth;
}

module.exports = { getDIT };