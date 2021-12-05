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

    // checking if we have a BINGO on a row
    for (var bingoBoard = 0; bingoBoard < bingoBoardList.length; ++bingoBoard){

        for (var bingoRow = 0; bingoRow < 5; ++bingoRow){
        // RESET THE COUNT
        bingoCountRow = 0;
            for (var bingoNum = 0; bingoNum < 5; ++bingoNum){
                if (bingoBoardList[bingoBoard][bingoRow][bingoNum] === ""){
                    ++bingoCountRow;
                };
            };

        // deleting the bingo board if we get a BINGO on a row
        // unless it's the last available board
        if (bingoCountRow === 5 && bingoBoardList.length > 1){
            bingoBoardList.splice(bingoBoard,1);
            // making sure the board is not skipped in the next check, resetting counter by -1
            --bingoBoard;
            break;
        } else if (bingoCountRow === 5){
            bingoWinningNumFinal = bingoWinningNum[bingoWinningNumSingle];
            bingoWinningBoard = bingoBoardList[bingoBoard];
            break outer_loop;
        };
        };
    };

    // checking if we have a BINGO on a column
    for (var bingoBoard = 0; bingoBoard < bingoBoardList.length; ++bingoBoard){
        for (var bingoColumn = 0; bingoColumn < 5; ++bingoColumn){
        // RESET THE COUNT
        bingoCountColumn = 0;
            for (var bingoRow = 0; bingoRow < 5; ++bingoRow){
                if (bingoBoardList[bingoBoard][bingoRow][bingoColumn] === ""){
                    ++bingoCountColumn;
                };
            };

        // deleting the bingo board if we get a BINGO on a column
        // unless it's the last available board
        if (bingoCountColumn === 5 && bingoBoardList.length > 1){
            bingoBoardList.splice(bingoBoard,1);
            // making sure the board is not skipped in the next check, resetting counter by -1
            --bingoBoard
            break;
        } else if (bingoCountColumn === 5){
            bingoWinningNumFinal = bingoWinningNum[bingoWinningNumSingle];
            bingoWinningBoard = bingoBoardList[bingoBoard];
            break outer_loop;
        };

        };
    };
};

console.log("The final winning number is: " + bingoWinningNumFinal);
console.log(bingoWinningBoard);

// calculating the score of the winning board
var bingoScore = bingoWinningBoard.flat().filter((x) => x).reduce((x,y) => x+y) * bingoWinningNumFinal;
console.log("The BINGO score of the last winning board is: " + bingoScore);