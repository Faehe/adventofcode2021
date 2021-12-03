var dive = `
// added my input from the puzzle in the commentary, heckin look into what I changed or smtn
`.split('\n').filter(x => x);

console.log(dive);

var diveForward = 0;
var depthPos = 0;
var aim = 0;

for(var i = 0; i < dive.length; ++i) {
    var [word, number] = dive[i].split(" ");
    number = parseInt(number)
  
      if (word === "down") {
        aim += number;
      } else if (word === "up") {
        aim -= number;
      } else if (word === "forward") {
        diveForward += number;
        depthPos += aim * number;
      };
	// test log incoming to see if THIS HECKIN WORKS
        console.log(`diveForward: ${diveForward}`);
	console.log(`aim: ${aim}`);
        console.log(`depthPos: ${depthPos}`);
        console.log("--------------------------");
  };

  // I'm sorry dear trees but more DOES THIS HECKIN WORK logs incoming
  console.log(diveForward);
  console.log(depthPos);
  console.log(aim);
  // Now the actual work
  var multipliedPos = diveForward * depthPos;

  // GIMME ANSWER PLZ
  console.log(multipliedPos);
