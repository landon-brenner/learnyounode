//console.log(process.argv);

// Initialize sum
sum = 0;

// Loop through process.argv, starting at position 2
for (i=2; i<process.argv.length; ++i) {
	sum = +process.argv[i] + sum;
}

// Print answer to console out
console.log(sum);