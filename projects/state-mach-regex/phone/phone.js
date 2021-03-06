var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin
rl.on('line', function (line) {
  // !!!! IMPLEMENT ME
  // Come up with the phone regex
  const phoneRegex = /(.|\(|)(\d\d\d)(.|\)|)(.|)(\d\d\d)(.|)(\d\d\d\d)/g;
  // Find matches
  let matches = phoneRegex.exec(line);
  // If match found, print number with no spaces, parens, or dashes
  if(matches) {
    console.log("Area code: " + matches[2] + "\nPrefix: " + matches[5] + "\nSuffix: " + matches[7]);
  } else {
  // Else print that no number was found
    console.log("No number was found.");
  }
});