function perfectTwo(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return null;
}

const nums = [2, 7, 11, 15];
const target = 22;
const result = perfectTwo(nums, target);

if (result) {
  console.log(
    `Index dari dua angka yang menjumlahkan ke ${target} adalah [${result[0]}, ${result[1]}]`
  );
} else {
  console.log("Tidak ada solusi yang ditemukan.");
}
