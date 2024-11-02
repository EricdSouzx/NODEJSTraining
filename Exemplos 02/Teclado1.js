const readln = require('readline');

const readline = readln.createInterface({
					input: process.stdin,
					output: process.stdout
				});

readline.question('Qual o seu nome? ', name => {
				  console.log(`Ola ${name}!`);
				  readline.close();
				});
