// 문제
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

// 출력
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])



console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)