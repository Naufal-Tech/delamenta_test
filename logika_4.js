function kaprekarConstant(num) {
  if (num === 6174) {
    return 0; // Jika input sudah 6174, tidak perlu lagi iterasi
  }

  // Helper function untuk mengurutkan angka secara naik dan turun
  function sortDigits(number, isAscending) {
    const digits = Array.from(String(number), Number);
    digits.sort((a, b) => (isAscending ? a - b : b - a));
    return parseInt(digits.join(""), 10);
  }

  let iterations = 0;

  while (num !== 6174) {
    const ascending = sortDigits(num, true);
    const descending = sortDigits(num, false);
    num = descending - ascending;
    iterations++;
  }

  return iterations;
}

// Contoh penggunaan
const input = 3124;
const constant = kaprekarConstant(input);
console.log(`Konstanta Kaprekar dari ${input} adalah: ${constant}`);
