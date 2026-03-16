const { SyntaxKind } = require("ts-morph");

/*
    Cyclomatic Complexity

    Υπολογίζει την πολυπλοκότητα
    ενός method με βάση τα
    decision nodes.

    Complexity = 1 + αριθμός branches.

    Branch nodes:

    - if
    - for
    - while
    - case
    - catch

    Υψηλή πολυπλοκότητα σημαίνει
    δύσκολη συντήρηση του κώδικα.
*/

function getComplexity(node){

    let complexity = 1;

    complexity += node.getDescendantsOfKind(SyntaxKind.IfStatement).length;
    complexity += node.getDescendantsOfKind(SyntaxKind.ForStatement).length;
    complexity += node.getDescendantsOfKind(SyntaxKind.WhileStatement).length;
    complexity += node.getDescendantsOfKind(SyntaxKind.CaseClause).length;
    complexity += node.getDescendantsOfKind(SyntaxKind.CatchClause).length;

    return complexity;
}



module.exports = { getComplexity };