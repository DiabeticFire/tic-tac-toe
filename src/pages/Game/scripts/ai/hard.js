import intersects from '../intersects.js';

const hard = (options, lines) => {
  let possibleLines = {};

  for (const line in lines) {
    let possibleWin = true;

    for (const cell in lines[line]) {
      if (lines[line][cell] === 'human') possibleWin = false;
    }

    if (possibleWin === true) {
      possibleLines[line] = lines[line];
    }
  }

  let potential = 0;
  let unoccupiedCells = [];

  for (const line in possibleLines) {
    for (const otherLine in possibleLines) {
      if (line !== otherLine && intersects(lines[line], lines[otherLine])) {
        let tempPotential = 0;
        let tempUnoccupiedCells = [];

        for (const cell in lines[line]) {
          if (lines[line][cell] === 'ai') tempPotential++;
          else tempUnoccupiedCells.push(cell);
        }

        for (const cell in lines[otherLine]) {
          if (lines[line][cell] === 'ai') tempPotential++;
          else tempUnoccupiedCells.push(cell);
        }

        if (tempPotential > potential) {
          potential = tempPotential;
          unoccupiedCells = [];
        }

        if (tempPotential === potential) unoccupiedCells = unoccupiedCells.concat(tempUnoccupiedCells);
      }
    }
  }

  return unoccupiedCells[Math.floor(Math.random() * unoccupiedCells.length)];
};

export default hard;
