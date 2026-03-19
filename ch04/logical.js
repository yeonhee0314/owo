// And(&&) 연산
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

// Or(||) 연산
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// Not(!) 연산
console.log(!true); //false
console.log(!false); //true

const age = 17;
// 학생의 나이인지 구분해보자.
//조건 1. 8세 이상
//조건 2. 19세 이하
const result = age >= 8 && age <= 19 ? "학생입니다." : "학생이 아닙니다.";
console.log(result);

// Nullish 병합 연산자
// 좌항이 null 또는 undefind인 경우
// 우항의 값을 반환하고,그렇지 않은 경우 좌항을 반환한다.
let nickname = null;
console.log(nickname ?? "익명 사용자");
nickname = undefined;
console.log(nickname ?? "익명 사용자");
nickname = "박연희";
console.log(nickname ?? "익명 사용자");