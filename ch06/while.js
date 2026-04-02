let i = 0;

while (i <= 4) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i <=4);

//반복문에 레이블을 설정하여
//원하는 지점에서 continue/break하는 것이 가능하다.
labelName: while (true) {
    while (true) {
        continue labelName;
        break labelName;
    }
}