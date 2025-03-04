const getRandomIndex = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  return Math.floor(Math.random() * arr.length);
};
export default getRandomIndex;
