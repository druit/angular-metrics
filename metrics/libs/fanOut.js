function getFanOut(cls){

    const constructor = cls.getConstructors()[0];

    if(!constructor) return 0;

    const params = constructor.getParameters();

    return params.length;
}

module.exports = { getFanOut };