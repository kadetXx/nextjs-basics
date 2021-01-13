const notes = new Array(10).fill(1).map((_, index) => ({
  id: Date.now() + index,
  title: `Hello note ${index}`,
}));

module.exports = notes; // using es6 exports will make the data clear on reload
