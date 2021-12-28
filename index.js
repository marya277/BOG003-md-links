/* eslint-disable no-unused-expressions */
// const chalk=require('chalk');
// var md = require('markdown-it')();
const marked = require('marked');

module.exports = () => {
  // ...
};
const fs = require('fs');
// Bconst path = require('path');
// fs.readFile('./readmeprueba.md', 'utf8', function(err, data) {
// if (err) throw err;
// console.log(data);
// });
// Import the filesystem module

// Function to get current filenames
// in directory with specific extension .md
// fs.readdir(__dirname, (err, files) => {
// if (err)
// console.log(err);
// else {
// console.log("\Filenames with the .md extension:");
// files.forEach(file => {
// if (path.extname(file) == ".md")
// console.log(file);
// })
// }
// })
const routeUser = './readmeprueba.md';
const getData = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, 'utf8', (err, data) =>
    //  si tiene  error reject,  de lo contrario  resolve
    // eslint-disable-next-line implicit-arrow-linebreak
    (err ? reject(err) : resolve(data)));
});

getData(routeUser)
  .then((data) => console.log('Data :', data))
  .catch((error) => console.log('Error: ', error));
