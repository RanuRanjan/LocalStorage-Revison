
// experiment:

// 1:
// localStorage.setItem("name","ranu")


// var x = localStorage.getItem("name")
// console.log(x);
// var body=document.querySelector('body')
// body.append(x)

// var btn=document.querySelector("button")

// function main(){
//     return localStorage.clear()
// }
// // main()



// 2:

// arr
var username =["ranu","ravi","yash","push","raushan"]
// convert

username=JSON.stringify(username)

// set
localStorage.setItem("username",username)
// get
var arrData=localStorage.getItem("username")
arrData=JSON.parse(arrData)


// obj
var obj={"name":"ranu","age":21}

// convert

obj=JSON.stringify(obj)


// set

localStorage.setItem("user",obj)
// get
var objData=localStorage.getItem("user")
objData=JSON.parse(objData)
console.log(objData);







var  displayingData=document.querySelector("body")

displayingData.append(arrData,objData)


