const readline = require('node:readline');
const { solve } = require('./solution');

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = <T = unknown>(question: string): Promise<T> => {
  return new Promise((resolve) => {
    io.question(question, resolve);
  });
};

const main = async () => {
  const num = await question('Number of test cases: ');

  for (let i = 0; i < Number(num); i++) {
    const str = await question('String: ');
    console.log(solve(str));
  }
};


main().then(() => io.close());