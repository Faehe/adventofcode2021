var binaryInput = `
// input list in commentary
`.split('\n').filter(x => x);

// cloning binaryInput for future purposes
var oxygenGeneratorRatingInput = Array.from(binaryInput)
var CO2scrubberRatingInput = Array.from(binaryInput)

// counter variables
var one = 0;
var zero = 0;

for(var melk = 0; melk < 12; ++melk){
    // checking through the oxygen generator rating input according to AoC bit criteria 
    for(var lööps = 0; lööps < oxygenGeneratorRatingInput.length; ++lööps){
        //checking digits one by one
        var OxygenBitCheck = oxygenGeneratorRatingInput[lööps].substr(melk,1);
        if (OxygenBitCheck === "1"){
            ++one;
        } else {
            ++zero;
        };
    };

    // checking which digit happens more often, throwing the rest out
    if (one >= zero){
        oxygenGeneratorRatingInput = oxygenGeneratorRatingInput.filter((x) => x.substr(melk,1) === "1");
    } else {
        oxygenGeneratorRatingInput = oxygenGeneratorRatingInput.filter((x) => x.substr(melk,1) === "0");
    };

    if (oxygenGeneratorRatingInput.length === 1){
        break;
    }

    // resetting counter variables
    one = 0;
    zero = 0;
};

for(var melk = 0; melk < 12; ++melk){
    // checking through the CO2 scrubber rating input according to AoC bit criteria 
    for(var lööps = 0; lööps < CO2scrubberRatingInput.length; ++lööps){
        //checking digits one by one
        var CO2BitCheck = CO2scrubberRatingInput[lööps].toString().substr(melk,1);
        if (CO2BitCheck === "1"){
            ++one;
        } else {
            ++zero;
        };
    };

    // checking which digit happens less often, filterin/throwing the rest out
    if (zero <= one){
        CO2scrubberRatingInput = CO2scrubberRatingInput.filter((x) => x.substr(melk,1) === "0");
    } else {
        CO2scrubberRatingInput = CO2scrubberRatingInput.filter((x) => x.substr(melk,1) === "1");
    };

    if (CO2scrubberRatingInput.length === 1){
        break;
    }

    // resetting counter variables
    one = 0;
    zero = 0;
};

// now both ratings only contain either strings starting off with 0 or 1
// the loop now starts again and will loop through every following digit for a same criteria check
// until only 1 string is left in every array

console.log("meeeerp oxygen generator rating is " + oxygenGeneratorRatingInput);
console.log("meeeeep CO2 scrubber rating is " + CO2scrubberRatingInput);

// now decoding binary cuz we need numbers and stuff
// gonna make new variables yet again \o/

var oxygenDecode = parseInt(oxygenGeneratorRatingInput, 2);
console.log("beep boop - oxygen generator rating decoded to: " + oxygenDecode);
var CO2Decode = parseInt(CO2scrubberRatingInput, 2);
console.log("beep boop - CO2 scrubber rating decoded to: " + CO2Decode);

// ok NOW GIB RESULT PLZ

console.log("Calculating life support rating for Santa's swaggy submarine.");
console.log("Calculating ...");
console.log("Calculating ...");
console.log("Calculating ...");
console.log("MEEP BOOP MERP BEEP BOOP");
console.log("Life support rating is " + oxygenDecode * CO2Decode);