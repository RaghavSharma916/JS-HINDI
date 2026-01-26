//Dates

let myDate=new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createDate=new Date(2023,0,14)
console.log(createDate.toLocaleString());

let myTimeStamp=Date.now()//time in millisecond
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));//convert millisecond to second

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());

//`${newDAte.getDay()} and thetime is`
                        