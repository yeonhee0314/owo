const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// + 연산자로 문자열/숫자 간 결합이 가능하다
console.log("문자열" + 1); // 문자열 1

//데이터 앞에 +를 붙여 숫자형으로 형변화 시도 가능
console.log(+"1024");
console.log(+true); // 1
console.log(+false); // 0

// + 를 제외한 산술 연산자는, 피연산자에 문자열이 있는 경우 Number 로 변환 후 연산을 시도
console.log("10" - b);
console.log("10" * b);
console.log("10" / b);
console.log("10" % b);
console.log("10" ** b);