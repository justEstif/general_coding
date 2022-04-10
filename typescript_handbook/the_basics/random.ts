function printId(id: number | string) {
  switch (typeof id) {
    case "string":
      console.log(id.toUpperCase());
      break;
    case "number":
      console.log(id);
      break;
  }
}
type Point = {
  x: number;
  y: number;
};
function printCoord(pt: Point) {
  console.log(pt.x, pt.y);
}
const pointA: Point = { x: 5, y: 2 };
printCoord(pointA);
