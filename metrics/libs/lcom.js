function getLCOM(cls){

    const methods = cls.getMethods();
    const properties = cls.getProperties();

    let shared = 0;

    methods.forEach(method => {

        properties.forEach(prop => {

            if(method.getText().includes(prop.getName())){
                shared++;
            }

        });

    });

    if(methods.length === 0) return 0;

    return shared / methods.length;
}

module.exports = { getLCOM };