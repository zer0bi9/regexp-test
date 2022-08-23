const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumped over the lazy dog.
abbcccddd
`;

console.log(
  str.match(/d$/gm),
  str.match(/^t/gim),
  str.match(/h..p/g),
  str.match(/fox|dog/g),
  str.match(/d{2,}/g),
  str.match(/\b\w{2,3}\b/g)
);

console.log(str.match(/(?<=@).{1,}/g));
