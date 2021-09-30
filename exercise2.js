// false || (true && false); ==> false
// true || 11 + 12; ==> true
// 31 + 22 || true; ==> true
// true && 1 + 7; ==> true
// false && 3 + 4; ==> false
// 1 + 2 && true; ==> true
// 32 * 4 >= 129; ==> false
// false !== !true; ==> false
// true === 4; ==> false
// false === (847 === "847"); ==> true
// false === (887 == "887"); ==> false
// !true || !(100 / 5) === 20 || 328 / 4 === 82 || false; ==> true

console.log(!true || !(100 / 5) === 20 || 328 / 4 === 82 || false);