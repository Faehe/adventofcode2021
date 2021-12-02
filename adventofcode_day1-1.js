var depth = `
// added my input from the puzzle in the commentary, heckin look into what I changed or smtn
`.split('\n').filter(x => x).map(x => parseInt(x))

var count = 0

for (var i = 0; i < depth.length; ++i) {
    if (depth[i-1] < depth[i]){
        ++count;
    };
    console.log(depth[i]);
  }

// GIMME ANSWER PLZ
console.log(count);
