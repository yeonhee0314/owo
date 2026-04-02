function solution(start_num, end_num) {
    const answer = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(i);
    }
    return answer;
}

let a = solution(3, 10);
console.log(a)
