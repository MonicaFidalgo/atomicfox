import Dogs from "./scripts/data/dogs.js";
import { uspData } from "./scripts/script.js";

//shuffle prototype function
Array.prototype.shuffle = function () {
  let m = this.length,
    i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]];
  }
  return this;
};

uspData();

Object.keys(Dogs).forEach(function (key) {
  console.log(Dogs[key].name);
});
