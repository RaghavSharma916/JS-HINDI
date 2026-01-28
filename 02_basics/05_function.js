// function sayMyName()
// {
//     console.log('a');
//     console.log('b');
//     console.log('c');
//     console.log('d');
// }
// sayMyName()

// function addTwo(number1,number2)
// {
//     console.log(number1+number2);
    
// }
// addTwo(7,9)

// function addTwo(number1,number2)
// {
//     let result=number1+number2
//     return result
    
// }
// const orig=addTwo(10,36)
// console.log("answer is",orig);
                  
// function loginUser(username ="ram")
// {
//     if(username === undefined){
//         console.log("please enter username");
//         return;

//     }
//     return `${username} just logged in `
// }
// console.log(loginUser());


const user={
    username:"a",
    price:99,

    welcomeMessage: function()
    {
        console.log(`${this.username},welcome`);
        console.log(this);
        
    }
}
//  user.welcomeMessage()
// user.username="Z"
// user.welcomeMessage()

//console.log(this);//result empty{}

// function chai()
// {
//     let username="A"
//     console.log(this.username);//result is undefined
    
// }
// chai()


const chai=()=>
{
    let username="raghav"
    console.log(this.username);
    
}
//chai()
//Arrow Function
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))