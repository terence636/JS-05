var a;
var b = null;
var c = undefined;
var d = 4;
var e = "five";
var f = a || b || c || d || e;

// console.log(f);

const g = c && d;
const h = !b || c

// console.log(g)
// console.log(!c)
// console.log(h)

// console.log(null || true)

console.log(null ?? 999)
console.log(null && 123)
console.log(undefined && 456)
console.log("aaa" && "bbb")

console.log(a?.b.c)