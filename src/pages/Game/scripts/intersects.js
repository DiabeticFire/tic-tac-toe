const intersects = (line1 = {}, line2 = {}) => {
  for (const cell1 in line1) {
    for (const cell2 in line2) {
      if (cell1 === cell2) return true;
    }
  }

  return false;
};

export default intersects;
