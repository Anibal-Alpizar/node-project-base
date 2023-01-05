const { readFile } = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(readFile);

async function read() {
  try {
    const result = await readFilePromise("./data/first.txt", "utf-8");
    const result2 = await readFilePromise("./data/second.txt", "utf-8");
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();
