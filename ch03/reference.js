const obj = {
    name: "박연희",
    age: 17,
};

const obj2 = obj;

obj.age = 1111111111111111;

//참조형 변수의 경우 복사 시,
//값이 아닌 참조값이 복사되어, 기존값 수정 시 신규 값에도 반영
console.log(obj);
console.log(obj2);

// 배열 또한 참조형 데이터이기에, 내부 데이터 수정 가능
const arr = [];
console.log(arr);
arr.push("안녕하세요.");
console. log(arr);
