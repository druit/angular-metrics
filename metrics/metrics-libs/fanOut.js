/*
    FanOut

    Μετρά πόσες εξαρτήσεις έχει μία κλάση.

    Στα Angular projects οι εξαρτήσεις συνήθως εμφανίζονται
    στο constructor μέσω Dependency Injection.

    Παράδειγμα:

        constructor(
            private authService: AuthService,
            private blogService: BlogService
        )

        FanOut = 2
*/
function getFanOut(cls) {

    const constructor = cls.getConstructors()[0];

    if(!constructor) return 0;

    const params = constructor.getParameters();

    return params.length;
}

module.exports = { getFanOut };