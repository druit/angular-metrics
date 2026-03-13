const { SyntaxKind } = require("ts-morph");

/*
    Υπολογίζει Cyclomatic Complexity ενός method.

    Βασική ιδέα:
    complexity = 1 + αριθμός decision nodes.

    Decision nodes είναι:
    - if
    - for
    - while
    - case
    - catch

    Το AST μας επιτρέπει να εντοπίσουμε αυτά τα nodes
    και να αυξήσουμε το complexity.
*/

// Έτσι αποφεύγεις πλήρη traversal.
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