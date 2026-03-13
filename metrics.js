const { Project } = require("ts-morph");

const project = new Project();

project.addSourceFilesAtPaths("D:/arx.net/github/PROJECT/GREEK SPOT PROJECT/CMS/greekspot_cms/src/**/*.ts");

const files = project.getSourceFiles();

let metrics = {
  files: 0,
  components: 0,
  services: 0,
  classes: 0,
  methods: 0,
  loc: 0
};

let filesMetrics = [];

files.forEach(file => {

  const loc = file.getFullText().split("\n").length;

  const fileMetrics = {
    name: file.getBaseName(),
    loc: loc,
    classes: 0,
    methods: 0,
    complexity: 0
  };

  metrics.files++;
  metrics.loc += loc;

  file.getClasses().forEach(cls => {

    metrics.classes++;
    fileMetrics.classes++;

    const methods = cls.getMethods().length;

    metrics.methods += methods;
    fileMetrics.methods += methods;

    cls.getDecorators().forEach(dec => {

      if (dec.getName() === "Component") {
        metrics.components++;
      }

      if (dec.getName() === "Injectable") {
        metrics.services++;
      }

    });

  });

  filesMetrics.push(fileMetrics);

});

console.log("Angular Project Metrics");
console.log("----------------------");

console.log("Files:", metrics.files);
console.log("Components:", metrics.components);
console.log("Services:", metrics.services);
console.log("Classes:", metrics.classes);
console.log("Methods:", metrics.methods);
console.log("Total LOC:", metrics.loc);

console.log("\nFile Metrics");
console.log("----------------------");

filesMetrics.forEach(f => {

  console.log("File:", f.name);
  console.log("LOC:", f.loc);
  console.log("Classes:", f.classes);
  console.log("Methods:", f.methods);
  console.log("----------------------");

});