Array.prototype.pop = function () {
  return "NO WAY";
};

const nums = [1, 2, 3, 4, 5];
console.log(nums.pop());
console.log(nums); // Before override (array) [1, 2, 3, 4]
console.log(nums); // After override [1, 2, 3, 4, 5]
