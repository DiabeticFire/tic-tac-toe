import easy from './easy.js';

const medium = (options, lines) => {
  lines.forEach((line) => {
    let humanCount = 0;
    let aiCount = 0;

    line.forEach((cell) => {
      if (cell === 'human') humanCount++;
      if (cell === 'ai') aiCount++;
    });

    console.log('human: ' + humanCount);
    console.log('ai: ' + aiCount);

    if (humanCount == 2 && aiCount == 0) {
      console.log('I AM HERE');
      console.log(line);
      return line[line.indexOf(null)];
    }
    if (aiCount == 2 && humanCount == 0) return line[line.indexOf(null)];
  });

  return easy(options);
};

export default medium;
