localStorage.setItem("name","Dharun")
localStorage.setItem("mobile",63798348)

let a=[1,2,3]
localStorage.setItem("arr1",[1,2,3])
localStorage.setItem("arr2",JSON.stringify([1,2,3]))
localStorage.setItem("arr3",a)
localStorage.setItem("arr4",JSON.stringify(a))

let obj={
    name:"dharun",
    age:22
}
localStorage.setItem("obj1",obj)
localStorage.setItem("obj2",JSON.stringify(obj))

let retrive_mobile=localStorage.getItem("mobile")
console.log(typeof retrive_mobile);
console.log(typeof JSON.parse(localStorage.getItem("mobile")));





