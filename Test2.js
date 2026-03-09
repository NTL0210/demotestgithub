// Test2.js - Các hàm tính toán phép nhân và chia

// Hàm tính phép nhân hai số
function multiply(a, b) {
  return a * b;
}

// Hàm tính phép chia hai số
function divide(a, b) {
  if (b === 0) {
    return "Lỗi: Không thể chia cho 0";
  }
  return a / b;
}

// Hàm tính phép nhân nhiều số
function multiplyMultiple(...numbers) {
  return numbers.reduce((result, num) => result * num, 1);
}

// Hàm tính phép chia liên tiếp
function divideSequential(...numbers) {
  if (numbers.length === 0) return "Lỗi: Không có số nào";
  
  return numbers.reduce((result, num) => {
    if (num === 0) {
      throw new Error("Lỗi: Không thể chia cho 0");
    }
    return result / num;
  });
}

// Các ví dụ sử dụng
console.log("--- Phép Nhân ---");
console.log(`5 × 4 = ${multiply(5, 4)}`);
console.log(`10 × 3 = ${multiply(10, 3)}`);
console.log(`2 × 3 × 4 = ${multiplyMultiple(2, 3, 4)}`);

console.log("\n--- Phép Chia ---");
console.log(`20 ÷ 4 = ${divide(20, 4)}`);
console.log(`100 ÷ 5 = ${divide(100, 5)}`);
console.log(`10 ÷ 0 = ${divide(10, 0)}`);

console.log("\n--- Phép Chia Liên Tiếp ---");
console.log(`100 ÷ 2 ÷ 5 = ${divideSequential(100, 2, 5)}`);
console.log(`1000 ÷ 10 ÷ 10 = ${divideSequential(1000, 10, 10)}`);

// Xuất các hàm để sử dụng trong các module khác
module.exports = {
  multiply,
  divide,
  multiplyMultiple,
  divideSequential
};
