const easy = (options = []) => {
  let choice = options[Math.floor(Math.random() * options.length)];
  console.log('choice: ' + choice);
  return choice;
};

export default easy;
