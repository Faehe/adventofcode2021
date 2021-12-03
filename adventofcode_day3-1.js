var binaryInput = ` 
input list in commentary
`.split('\n').filter(x => x);

console.log(binaryInput);

// lots of variables I'm gonna use yay
// counter variables
var one = 0;
var zero = 0;

// parts making the actual rates
var gammaFirst = 0;
var epsilonFirst = 0;
var gammaSecond = 0;
var epsilonSecond = 0;
var gammaThird = 0;
var epsilonThird = 0;
var gammaFourth = 0;
var epsilonFourth = 0;
var gammaFifth = 0;
var epsilonFifth = 0;
var gammaSixth = 0;
var epsilonSixth = 0;
var gammaSeventh = 0;
var epsilonSeventh = 0;
var gammaEighth = 0;
var epsilonEighth = 0;
var gammaNinth = 0;
var epsilonNinth = 0;
var gammaTenth = 0;
var epsilonTenth = 0;
var gammaEleventh = 0;
var epsilonEleventh = 0;
var gammaTwelfth = 0;
var epsilonTwelfth = 0;

// actual rates
var gammaRate = 0;
var epsilonRate = 0;

// checking all first numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(0,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting first number for the gamma rate
if (one > zero){
  gammaFirst = 1;
} else {
  gammaFirst = 0;
};

// setting first number for the gamma rate
if (one < zero){
  epsilonFirst = 1;
} else {
  epsilonFirst = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all second numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(1,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting second number for the gamma rate
if (one > zero){
  gammaSecond = 1;
} else {
  gammaSecond = 0;
};

// setting second number for the gamma rate
if (one < zero){
  epsilonSecond = 1;
} else {
  epsilonSecond = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all third numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(2,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting third number for the gamma rate
if (one > zero){
  gammaThird = 1;
} else {
  gammaThird = 0;
};

// setting third number for the gamma rate
if (one < zero){
  epsilonThird = 1;
} else {
  epsilonThird = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all fourth numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(3,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting fourth number for the gamma rate
if (one > zero){
  gammaFourth = 1;
} else {
  gammaFourth = 0;
};

// setting fourth number for the gamma rate
if (one < zero){
  epsilonFourth = 1;
} else {
  epsilonFourth = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all fifth numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(4,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting fifth number for the gamma rate
if (one > zero){
  gammaFifth = 1;
} else {
  gammaFifth = 0;
};

// setting fifth number for the gamma rate
if (one < zero){
  epsilonFifth = 1;
} else {
  epsilonFifth = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all sixth numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(5,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting sixth number for the gamma rate
if (one > zero){
  gammaSixth = 1;
} else {
  gammaSixth = 0;
};

// setting sixth number for the gamma rate
if (one < zero){
  epsilonSixth = 1;
} else {
  epsilonSixth = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all seventh numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(6,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting seventh number for the gamma rate
if (one > zero){
  gammaSeventh = 1;
} else {
  gammaSeventh = 0;
};

// setting seventh number for the gamma rate
if (one < zero){
  epsilonSeventh = 1;
} else {
  epsilonSeventh = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all eighth numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(7,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting eighth number for the gamma rate
if (one > zero){
  gammaEighth = 1;
} else {
  gammaEighth = 0;
};

// setting eighth number for the gamma rate
if (one < zero){
  epsilonEighth = 1;
} else {
  epsilonEighth = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all ninth numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(8,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting ninth number for the gamma rate
if (one > zero){
  gammaNinth = 1;
} else {
  gammaNinth = 0;
};

// setting ninth number for the gamma rate
if (one < zero){
  epsilonNinth = 1;
} else {
  epsilonNinth = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all tenth numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(9,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting tenth number for the gamma rate
if (one > zero){
  gammaTenth = 1;
} else {
  gammaTenth = 0;
};

// setting tenth number for the gamma rate
if (one < zero){
  epsilonTenth = 1;
} else {
  epsilonTenth = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all eleventh numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(10,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting eleventh number for the gamma rate
if (one > zero){
  gammaEleventh = 1;
} else {
  gammaEleventh = 0;
};

// setting eleventh number for the gamma rate
if (one < zero){
  epsilonEleventh = 1;
} else {
  epsilonEleventh = 0;
};

// resetting counter parameters
one = 0;
zero = 0;

// checking all twelfth and heckin last numbers of every element
for(var i = 0; i < binaryInput.length; ++i) {
  var binaryCheck = binaryInput[i].toString().substr(11,1);
  if (binaryCheck === "1"){
    ++one;
  } else {
    ++zero;
  }
};

// setting twelfth number for the gamma rate
if (one > zero){
  gammaTwelfth = 1;
} else {
  gammaTwelfth = 0;
};

// setting twelfth number for the gamma rate
if (one < zero){
  epsilonTwelfth = 1;
} else {
  epsilonTwelfth = 0;
};

// finally no resetting one and zero anymore
// now putting together gamma and epsilon rates

gammaRate = gammaFirst.toString() + gammaSecond.toString() + gammaThird.toString() + gammaFourth.toString() + gammaFifth.toString() + gammaSixth.toString() + gammaSeventh.toString() + gammaEighth.toString() + gammaNinth.toString() + gammaTenth.toString() + gammaEleventh.toString() + gammaTwelfth.toString();
epsilonRate = epsilonFirst.toString() + epsilonSecond.toString() + epsilonThird.toString() + epsilonFourth.toString() + epsilonFifth.toString() + epsilonSixth.toString() + epsilonSeventh.toString() + epsilonEighth.toString() + epsilonNinth.toString() + epsilonTenth.toString() + epsilonEleventh.toString() + epsilonTwelfth.toString();
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

// yes we gotta cut down power consumption. tf is this number?!