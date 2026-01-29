class player{
    constructor(name,age,sport)
    {
        this.name=name;
        this.age=age;
        this.sport=sport;
    }
    info()
    {
       console.log(`the player name is ${this.name} and player age is ${this.age}`);
       
    }
    static greet()
    {
        console.log("Good Afternoon");
        
        
    }
    
}
let p1=new player("Dhoni",22,"Cricket");
let p2=new player("ronaido",37,"Football");

p1.info();
p2.info();
player.greet();

let obj1={
    name:"rrr",
    age:23,
    role:"development"
}

let obj2={
    name:"dfr",
    age:32,
    role:"Testing"
}
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
obj1.name="kkk";//update already existing value with new value
obj1.team="leader";//to add neww key and value
delete obj1.role;//to delete the key
console.log(Object.entries(obj1));

Object.freeze(obj1);//we cannot modify the object
delete obj1.name;  //once freeze we can't delete
obj2.address="chennai";//we can't delete
obj1.name="lll";//we can't modify
console.log(Object.entries(obj1));//it's not reflect because it freeze

Object.seal(obj2);//once seal
obj2.name="rfd";//we can modify
delete obj2.name;//we can't delete
obj2.team="leader";//we can't add

console.log(Object.entries(obj2));
console.log(Object.isFrozen(obj1));
console.log(Object.isSealed(obj2));

let obj3={
    name:"virat"
}
let obj4={
    name:"dhoni"
}

console.log(Object.entries(obj3));
console.log(Object.entries(obj4));
Object.assign(obj3,obj4);
console.log(Object.entries(obj3));
console.log(obj4.hasOwnProperty("name"));





