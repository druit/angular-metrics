function getRFC(cls){

    const methods = cls.getMethods();

    const calledMethods = new Set();

    methods.forEach(method => {

        method.forEachDescendant(node => {

            if(node.getKindName() === "CallExpression"){

                const text = node.getExpression().getText();
                calledMethods.add(text);

            }

        });

    });

    return methods.length + calledMethods.size;
}

module.exports = { getRFC };