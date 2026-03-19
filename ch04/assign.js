let a = 10;
let b = 3;

console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(a **= b);

// 증감 연산자
// ++, --가 앞에 붙으나 뒤에 붙으나 a = 1 + 1 or a = a - 1 연산은 동일
// 앞에 붙는 경우 전위 연산으로 우선 수행
// 뒤에 붙는 경우 후위 연산으로 우선순위가 낮음

a = 1;

console.log(a++); // a = a + 1
console.log(++a); // a = a + 1

// 감소 연산자
console.log (a--); // a = a - 1
console.log(--a); // a = a - 1