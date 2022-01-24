const readline = require('readline-sync');

const name = readline.question('nome? ');
const cock = readline.question('tamaho do pau? ');

if (cock > 16) {
  return console.log('nice cock ' + name);
}

else return console.log('not nice cock ' + name);