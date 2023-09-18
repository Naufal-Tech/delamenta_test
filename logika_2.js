function wordBreak(s, wordDict) {
  const memo = new Map();

  function backtrack(start) {
    if (start === s.length) {
      return [[]];
    }

    if (memo.has(start)) {
      return memo.get(start);
    }

    const result = [];

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);

      if (wordDict.includes(word)) {
        const nextBreaks = backtrack(end);

        for (const nextBreak of nextBreaks) {
          result.push([word, ...nextBreak]);
        }
      }
    }

    memo.set(start, result);
    return result;
  }

  const wordBreaks = backtrack(0);
  const formattedBreaks = wordBreaks.map((breaks) => breaks.join(", "));

  return formattedBreaks;
}

const input = "program";
const dictionary = ["pro", "gram", "merit", "program", "it", "programmer"];
const result = wordBreak(input, dictionary);

console.log(result);
