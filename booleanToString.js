let input = true;
let result;

if (input) {
  result = "Yes";
  return result;
} else {
  result = "No";
  return result;
}
console.log(result);

/*ternary operator */

input ? (result = "Yes") : (result = "No");
console.log(result);
