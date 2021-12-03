var binaryInput = ` 
// input list in commentary from first upload
`.split('\n').filter(x => x);
// counter variables
var one = 0;
var zero = 0;

// parts making the actual rates
// replaced single variables by arrays for all parts
// I was today years old when I learned "Array(12)" makes array with 12 elements, "fill" fills it with all 0's
var gammaValue = Array(12).fill(0);
var epsilonValue = Array(12).fill(0);

// melk counts through the digits of each code, lööps loop through the whole list top down
for(var melk = 0; melk < gammaValue.length; ++melk){
    // checking the numbers one by one
    for(var lööps = 0; lööps < binaryInput.length; ++lööps) {
      var binaryCheck = binaryInput[lööps].toString().substr(melk,1);
      if (binaryCheck === "1"){
        ++one;
      } else {
        ++zero;
      }
    };

  // setting first number for the gamma rate
  if (one > zero){
    gammaValue[melk] = 1;
  } else {
    gammaValue[melk] = 0;
  };

  // setting first number for the epsilon rate
  if (one < zero){
    epsilonValue[melk] = 1;
  } else {
    epsilonValue[melk] = 0;
  };

  // resetting counter parameters
  one = 0;
  zero = 0;
}

// I was today years old when I learned to join arrays into a single string
gammaRate = gammaValue.join("");
epsilonRate = epsilonValue.join("");
console.log("beep boop - Gamma rate: " + gammaRate);
console.log("boop beep - Epsilon rate: " + epsilonRate);

// yay
// now decoding binary cuz we need numbers and stuff
// gonna make new variables yet again \o/

var gammaDecode = parseInt(gammaRate, 2);
console.log("beep boop - Gamma rate decoded to: " + gammaDecode);
var epsilonDecode = parseInt(epsilonRate, 2);
console.log("beep boop - Epsilon rate decoded to: " + epsilonDecode);

// dis worked! \o/ thanks google!
// now GIB RESULT PLZ

var powerConsumption = gammaDecode * epsilonDecode;
console.log("Power consumption at " + powerConsumption + "%!")
