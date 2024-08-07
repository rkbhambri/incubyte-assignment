const add = (numbers) => {
  if (!numbers) return 0;

  const { delimiter, numbersString } = parseInput(numbers);

  const numArray = splitNumbers(numbersString, delimiter).map(toNumber);

  checkForNegatives(numArray);

  return sum(numArray);
};

const parseInput = (input) => {
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    const delimiter = new RegExp(
      escapeRegExp(input.substring(2, delimiterEndIndex))
    );
    const numbersString = input.substring(delimiterEndIndex + 1);
    return { delimiter, numbersString };
  }

  return { delimiter: /,|\n/, numbersString: input };
};

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const splitNumbers = (numbersString, delimiter) =>
  numbersString.split(delimiter);

const toNumber = (value) => {
  const number = parseInt(value, 10);
  return isNaN(number) ? 0 : number;
};

const checkForNegatives = (numbers) => {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
};

const sum = (numbers) => numbers.reduce((total, num) => total + num, 0);

module.exports = add;
