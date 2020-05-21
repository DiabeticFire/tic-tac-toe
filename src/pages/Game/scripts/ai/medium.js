import easy from './easy.js';
import hard from './hard.js';

const medium = (options, lines, actuallyHard = false) => {
  let aiWin = [];
  let aiLose = [];

  for (const line in lines) {
    let humanCount = 0;
    let aiCount = 0;
    let empty = '';

    for (const cell in lines[line]) {
      if (lines[line][cell] === 'human') humanCount++;
      if (lines[line][cell] === 'ai') aiCount++;
      if (lines[line][cell] === null) empty = cell;
    }

    if (humanCount === 2 && aiCount === 0) {
      aiLose.push(empty);
    }

    if (aiCount === 2 && humanCount === 0) {
      aiWin.push(empty);
    }
  }

  if (aiLose.length > 0) options = aiLose[Math.floor(Math.random() * aiLose.length)];
  if (aiWin.length > 0) options = aiWin[Math.floor(Math.random() * aiWin.length)];

  if (actuallyHard) hard(options, lines);

  return easy(options);
};

export default medium;
