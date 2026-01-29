// const arr=[1,2,3,4,5]
// const newNums=arr.filter((num)=>num>2)
// console.log(newNums);

let a=[1,23,3]
const n=a.map( (num) => num+10).map((num)=>num*10).filter((num)=>num>111)
console.log(n);

const result=a.reduce((acc,cur)=>acc+cur,0)
console.log(result);
