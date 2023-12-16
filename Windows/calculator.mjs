import readline from "readline";
import chalk from "chalk";
import figlet from "figlet";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.clear();
  const banner = figlet.text("Calculator", (error, asciiText) => {
    console.log(chalk.blue.bold(asciiText));
    calculate();
  });
}

function calculate() {
  rl.question(
    chalk.blue.bold("Enter an expression to calculate\n> "),
    (input) => {
      try {
        const result = eval(input);
        console.log(chalk.green(`Result : ${result}`));
      } catch (error) {
        console.error(chalk.red.bold("Error :"), error.message);
      }

      console.log(chalk.blue.bold("\nReady for the next calculation...\n"));
      calculate();
    }
  );
}

main();
