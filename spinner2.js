const sequenceArr = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];

const spinner = function(sequenceArr) {
  for (let i = 0; i < sequenceArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(sequenceArr[i]);
    }, i * 200);
  }
};
spinner(sequenceArr);
