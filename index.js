const consola = require("consola");

main();

function runIteration() {
  consola.info("Running iteration: " + Date.now());
}

function main() {
  runIteration();
  setInterval(() => {
    runIteration();
  }, 5000);
}
