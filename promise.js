const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

// getText("./data/fourth.txt")
//   .then((result) => console.log(result))
//   .then(() => getText("./data/first.txt"))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

async function read() {
    try {
        // throw new Error('Error')
        const result = await getText("./data/first.txt");
        const result2 = await getText("./data/second.txt");
        console.log(result);
        console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();
