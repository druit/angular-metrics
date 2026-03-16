function getLOC(cls){

    const sourceFile = cls.getSourceFile();

    const text = sourceFile.getFullText();

    return text.split(/\r?\n/).length;
}

function getSLOC(cls){

    const lines = cls.getSourceFile().getFullText().split(/\r?\n/);

    return lines.filter(line => {
        const trimmed = line.trim();
        return trimmed !== "" && !trimmed.startsWith("//");
    }).length;
}

module.exports = { getLOC, getSLOC };