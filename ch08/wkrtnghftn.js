// 1
function solution(num_list) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    return [even, odd];
}
console.log (solution([1, 2, 3, 4, 5,]));

// 2
function solution(my_string, letter) {
    let answer = "";
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] != letter) {
            answer += my_string[i];
        }
    }
    return answer;
}

console.log(solution("abcdef", "f"))

// 3
function solution(numbers) {
    numbers.sort((a, b) => b -a);
    return numbers[0] * numbers[1];
}

// 4
function solution(money) {
    const price = 5500;
    let count = Math.trunc(money / price)
    let change = money % price;
    return ([count, change])
}