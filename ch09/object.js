// ES6 > Object

// 원래는 이러한 방식으로 객체 인스턴스를 만들어야된다
// const obj2 = new Object()

// 객체 리터럴 문법을 사용해 객체를 편하게 생성할 수 있다.
// 객체 내 데이터 속성은 프로퍼티, 함수는 메서드라고 부른다.
const obj = {
    name: "박연희",
    age: 17,
    // 오브젝트 내에는 함수도 추가 가능하다(메서드)
    // JS 함수도 값으로 다룰 수 있기 때문
    sayHello: function (msg) {
        console.log("안녕하세요." + msg);
    },
};

// obj["age"]와  obj.age는 동일한 기능을 하는 코드
console.log(obj.age);
console.log(obj["age"]);

// 객체에 동적으로 프로퍼티를 추가할 수 있다.
obj.gebder = "Female";

// 객체의 프로퍼티를 삭제할 수 있다.
delete obj.gebder;

// 객체의 프로퍼티를 수정할 수 있다.
obj.age = 18;
obj.sayHello("asdf");
console.log(obj);

let id = "yhpark";
let pw = "1234";
const credentials = {
    id,
    pw,
};

console.log(credentials);