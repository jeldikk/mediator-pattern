const Client = require("./lib/client");
const Mediator = require("./lib/mediator");

function main() {
  let kamal = new Client("kamal");
  let kumar = new Client("kumar");
  let jeldi = new Client("jeldi");

  let mediator = new Mediator("mediator-1");
  mediator.register(kamal);
  mediator.register(kumar);
  mediator.register(jeldi);

  kamal.send("All you need is Love.");
  kamal.send("I Love you Kumar");
}

main();
