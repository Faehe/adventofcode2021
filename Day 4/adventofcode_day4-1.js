// bingo numbers are already fit to be in an array, so I'm gonna just make one for later use
var bingoWinningNum = [ //copy-pasted first line of the input here];

// now making 1 array for each bingo field
// using /n/n to tell JS where I want an array to end and a new one to begin
var bingoBoardList = `
// copy-pasted the whole amount of bingo blocks here
`.split('\n\n').filter(x => x);

for(var bingoBoard = 0; bingoBoard < bingoBoardList.length; ++bingoBoard){
    bingoBoardList[bingoBoard] = bingoBoardList[bingoBoard].split('\n');
        for(var bingoRow = 0; bingoRow < 5; ++bingoRow){
            bingoBoardList[bingoBoard][bingoRow] = bingoBoardList[bingoBoard][bingoRow].split(' ').filter((x) => x).map((x) => parseInt(x));
        };
};

// variables for the last called winning number & winning board 
var bingoWinningNumFinal = -1;
var bingoWinningBoard = -1;

// checking all boards for winning rows & columns
// labelling the loop so we can break it later
outer_loop:
// going through all bingo numbers
for (var bingoWinningNumSingle = 0; bingoWinningNum.length; ++bingoWinningNumSingle){
    // going through all bingo boards, rows, numbers and leave blanks instead of called numbers inside the boards
    for (var bingoBoard = 0; bingoBoard < bingoBoardList.length; ++bingoBoard){
        for (var bingoRow = 0; bingoRow < 5; ++bingoRow){
            for (var bingoNum = 0; bingoNum < 5; ++bingoNum){
                if (bingoBoardList[bingoBoard][bingoRow][bingoNum] === bingoWinningNum[bingoWinningNumSingle]){
                    bingoBoardList[bingoBoard][bingoRow][bingoNum] = "";
                };
            };
        };
    };

    // counter variables to see if we have a BINGO
    var bingoCountRow = 0;
    var bingoCountColumn = 0;
    var bingoBoardCount = -1;

    // checking if we have a BINGO on a row
    for (var bingoBoard = 0; bingoBoard < bingoBoardList.length; ++bingoBoard){
        bingoBoardCount++;
        for (var bingoRow = 0; bingoRow < 5; ++bingoRow){
            for (var bingoNum = 0; bingoNum < 5; ++bingoNum){
                if (bingoBoardList[bingoBoard][bingoRow][bingoNum] === ""){
                    ++bingoCountRow;
                };
            };

        // ending the loop if we get a BINGO on a row
        if (bingoCountRow === 5){
            bingoWinningNumFinal = bingoWinningNum[bingoWinningNumSingle];
            bingoWinningBoard = bingoBoardList[bingoBoardCount];
            break outer_loop;
        };

        // resetting the count in case there has been no BINGO on checked row
        bingoCountRow = 0;
        };
    };

    // checking if we have a BINGO on a column
    for (var bingoBoard = 0; bingoBoard < bingoBoardList.length; ++bingoBoard){
        bingoBoardCount++;
        for (var bingoColumn = 0; bingoColumn < 5; ++bingoColumn){
            for (var bingoRow = 0; bingoRow < 5; ++bingoRow){
                if (bingoBoardList[bingoBoard][bingoRow][bingoColumn] === ""){
                    ++bingoCountColumn;
                };
            };

        // endling the loop if we get a BINGO on a column
        if (bingoCountColumn === 5){
            bingoWinningNumFinal = bingoWinningNum[bingoWinningNumSingle];
            bingoWinningBoard = bingoBoardList[bingoBoardCount];
            break outer_loop;
        };

        // resetting the count in case there has been no BINGO on checked column
        bingoCountColumn = 0;
        };
    };
};

console.log("The final winning number is: " + bingoWinningNumFinal);
console.log("The winning bingo board is the board: " + (bingoBoardCount + 1));
console.log(bingoWinningBoard);

// calculating the score of the winning board
var bingoScore = bingoWinningBoard.flat().filter((x) => x).reduce((x,y) => x+y) * bingoWinningNumFinal;
console.log("The BINGO score of the winning board is: " + bingoScore);