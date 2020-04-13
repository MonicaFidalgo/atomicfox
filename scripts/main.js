import Dogs from "./data/dogs.js";
import { uspData } from "./script.js";

uspData();
Object.keys(Dogs).forEach(function (key) {
  console.log(Dogs[key].name);
});
