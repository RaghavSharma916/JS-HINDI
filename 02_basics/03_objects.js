// singleton
//object.create

//object literals

const mySym=Symbol("key1")


const Jsuser={
    name:"abc",
    "full name":"abc xyz",
    [mySym]:"mykey1",
    age:11,
    location:"d"
}
console.log(Jsuser.name);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);
console.log(typeof Jsuser[mySym]);

console.log(Jsuser);

Jsuser.greeting=function(){

    console.log(`hi ${this.name}`);
    
}
console.log(Jsuser.greeting());
