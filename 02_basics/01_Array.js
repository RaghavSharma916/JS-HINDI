//Array

const myArr=[1,2,3,4]
const myHeros=["shaktimann","naagraj"]

const myArr2=new Array(1,9,8)
console.log(myArr[0]);

//Array methods
//myarr.push//add element
// myArr.pop()//remove last element
// myArr.unshift(9)//it will add element in starting in array
// myArr.shift()//remove first element

// console.log(myArr.includes(90))

// console.log(myArr.indexOf(1))

// const newArr=myArr.join()//convert to string
// console.log(myArr);
// console.log(typeof newArr);


//slice ,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)//slice will not change originall array
console.log(myn1);

const myn2=myArr.splice(1,3)//splice will change original array and also include index which we mention in the range unlike in slice
console.log(myn2);

