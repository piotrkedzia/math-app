var express = require("express");
var router = express.Router();

/* GET the list of euqations */
router.get("/", function(req, res, next) {
  //    res.send('Hello from equations!');
  res.render("equations", {
    title: "The list of equations!!!",
    numbers: generateEquations()
  });
});

function generateEquations() {
  let equations = [];
  for (i = 0; i < 10; i++) {
    equations.push({
      first: randomIntFromInterval(0, 20),
      second: randomIntFromInterval(0, 20)
    });
  }
  return equations;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = router;
