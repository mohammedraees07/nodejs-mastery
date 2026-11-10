import path from "path";

// path.join : uses the correct path separator for the current operating system
const filePath = path.join("src", "03-path-module.ts");
console.log({ filePath });

// process.cwd() : returns the current working directory of the Node.js process
const currentWorkingDirectory = process.cwd();
console.log({ currentWorkingDirectory });

// path.join creates path string not a folder or doesnt check if the file exists or not 

const filename = path.basename(filePath);
console.log({ filename });

const fileExt = path.extname(filePath);
console.log({ fileExt });

const parentFolder = path.dirname(filePath);
console.log({ parentFolder });