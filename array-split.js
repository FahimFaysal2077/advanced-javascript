// slice:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);


// splice:
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const removed = nums2.splice(2, 5, 88,);
console.log(removed);
console.log(nums2);


// array join elements:
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const together = nums3.join('ami');
console.log(together);