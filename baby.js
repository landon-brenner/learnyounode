// Initialize sum
sum = 0;

/*
Loop through process.argv, starting at position 2
NOTE: process.argv is by default a string,
must be converted to integer using +process.argv
*/
for (i=2; i<process.argv.length; ++i) {
	sum = +process.argv[i] + sum;
}

// Print answer to console out
console.log(sum);