// 1부터 n까지 반복하면서,
// 5보다 작은 수는 더하고, 5 이상인 수는 빼는 함수 calc(n)을 작성하시오.
// 최종 결과를 반환하시오.

function calc(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i < 5) {
            sum += i;
        } else {
            sum -= i;
        }
    }
    return sum;
}