const getCommonPrefixLength = (str: string): number => {
  const ignoredPrefixs: Set<number> = new Set();

  let sum = str.length;

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (ignoredPrefixs.has(j)) {
        continue;
      }

      if (str[i] === str[j + i]) {
        sum += 1
      } else {
        ignoredPrefixs.add(j);
      }
    }
  }

  return sum;
};



module.exports = {
  solve: getCommonPrefixLength,
};


