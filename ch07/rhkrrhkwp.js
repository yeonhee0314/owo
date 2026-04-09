function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i <= num2; i++) {
        answer.push(numbers[i]);
    }

    return answer; 
}

function solution(arr, delete_list) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        let flag = true;
        
       for(let j = 0; j < delete_list.length; j ++) {
         if (arr[i] === delete_list[j]) {
             flag = false;
         }
           
       }
        if (flag){
            answer.push(arr[i])
        }
            
    }
    return answer
    
}