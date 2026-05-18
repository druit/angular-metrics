function getAngularType(fileName) {

    const lower = fileName.toLowerCase();

    if (lower.includes("component")) return "component";
    if (lower.includes("service")) return "service";
    if (lower.includes("guard")) return "guard";
    if (lower.includes("interceptor")) return "interceptor";
    if (lower.includes("directive")) return "directive";
    if (lower.includes("pipe")) return "pipe";

    return "unknown";
}

module.exports = { getAngularType };