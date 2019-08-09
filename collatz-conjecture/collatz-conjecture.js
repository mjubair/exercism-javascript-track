const isOdd = num => num % 2;

export const steps = num => {
  let counter = 0;
  
  if (num <= 0) throw "Only positive numbers are allowed";

  while (num > 1) {
    num = isOdd(num) ? 3 * num + 1 : num / 2
    counter++  
  }

  return counter;
};
