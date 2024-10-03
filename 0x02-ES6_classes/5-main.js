import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  // eslint-disable-next-line no-new
  const a = new TestBuilding(200);
  console.log(a);
} catch (err) {
  console.log(err);
}
