// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var x=K;
    while(x){
        A.push(A.shift());
        x--;
    }
    return A;
}

solution([1, 2, 3, 4], 4)