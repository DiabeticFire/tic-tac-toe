const randBoolean = () => {
  console.log(Math.random());
  if (Math.random() > 0.5) return true;
  else return false;
};

export default randBoolean;
