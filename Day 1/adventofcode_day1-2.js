var depth = `
// added my input from the puzzle in the commentary, heckin look into what I changed or smtn
`.split('\n').filter(x => x).map(x => parseInt(x))

var count = 0

for (var i = 0; i < depth.length; ++i) {
    var firstWindow = depth[i-1]+depth[i]+depth[i+1];
    var secondWindow = depth[i]+depth[i+1]+depth[i+2];
    // only learned afterward that depth[i+1] can be deleted with the same result, but this is what I did first so eh
    
    if (firstWindow < secondWindow){
        ++count;
    };
    
    // test counting log incoming to see if THIS HECKIN WORKS
    console.log(depth[i]);
  }

// GIMME ANSWER PLZ
console.log(count);
