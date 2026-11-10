

import process from 'process';


// This is what process.argv actually looks like behind the scenes:
// process.argv = [
//   "/path/to/node", // [0] The path to Node.js itself
//   "/path/to/my-js-file",  // [1] The path to your JavaScript file
// my custom commands :
//   "start",               // [2] The first extra word you typed
//   "--fail"               // [3] The second extra word you typed
// ];


const command = process.argv[2] ?? "start";


const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");


process.on('exit', (code) => {
  console.log(`Process is exiting with code: ${code}`);
});

function runApp():void{
    console.log({command});
}
if(shouldFail) {
  console.error("Process failed due to --fail flag");
  process.exit(1);
}
if(shouldCrash) {
  console.error("Process crashed due to --crash flag");
  process.exit(1);
}

runApp();
