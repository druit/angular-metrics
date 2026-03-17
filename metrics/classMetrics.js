const { getWMC, getWMCstar } = require("./metrics-libs/wmc");
const { getLCOM } = require("./metrics-libs/lcom");
const { getDIT } = require("./metrics-libs/dit");
const { getCBO } = require("./metrics-libs/cbo");
const { getRFC } = require("./metrics-libs/rfc");
const { getFanOut } = require("./metrics-libs/fanOut");
const { getNOM } = require("./metrics-libs/nom");
const { getLOC, getSLOC } = require("./metrics-libs/loc");
const { getNPM } = require("./metrics-libs/npm");
const { getNOP } = require("./metrics-libs/nop");
const { getMPC } = require("./metrics-libs/mpc");

function analyzeClass(cls, fanInMap){

    if(!cls){
        return {
            name: "Unknown",
            // ---------------
            LOC: 0,
            SLOC: 0,
            // ---------------
            NOM: 0,
            NOP: 0,
            NPM: 0,
            // ---------------
            WMC: 0,
            WMCstar: 0,
            // ---------------
            DIT: 0,
            CBO: 0,
            RFC: 0,        
            LCOM: 0,
            MPC: 0,
            // ---------------
            FanOut: 0,
            FanIn: 0
        };
    }

    const metrics = {
        name: cls.getName() || "AnonymousClass",
        // ---------------
        LOC: getLOC(cls),
        SLOC: getSLOC(cls),
        // ---------------
        NOM: getNOM(cls),
        NOP: getNOP(cls),
        NPM: getNPM(cls),
        // ---------------
        WMC: getWMC(cls),
        WMCstar: getWMCstar(cls),
        // ---------------
        DIT: getDIT(cls),
        CBO: getCBO(cls),
        RFC: getRFC(cls),        
        LCOM: getLCOM(cls),
        MPC: getMPC(cls),
        // ---------------
        FanOut: getFanOut(cls),
        FanIn: fanInMap[cls.getName()] || 0
    };

    return metrics;
}

module.exports = { analyzeClass };