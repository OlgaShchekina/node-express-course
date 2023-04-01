const { writeFile }= require('fs')
const os = require("os");
const sentence = require("./practice2");
const content = `${sentence} ${os.userInfo().username}`;

writeFile("./content/practice.txt", content, (err) => {
  if (err) console.log(err);
  console.log("The file has been saved!");
});

