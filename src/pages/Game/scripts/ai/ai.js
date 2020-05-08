import hard from './hard.js';
import medium from './medium.js';
import easy from './easy.js';

const ai = (difficulty, grid) => {
  let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // remove already filled cells from options
  console.log(grid);
  for (const cell in grid) {
    if (grid[cell] != null) {
      let cellNum = Number(cell.substr(5));
      options.splice(options.indexOf(cellNum), 1);
    }
  }
  console.log(options);

  if (difficulty === 'hard') return hard(options);
  if (difficulty === 'medium') return medium(options);
  if (difficulty === 'easy') return easy(options);
};

export default ai;
