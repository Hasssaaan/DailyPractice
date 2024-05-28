
interface Author{
    firsrName:string,
    lastName:string
}
interface new_object{
    name:string,
    author:Author
}
let new_object:new_object = {
name:"Muhammad",
author:{
    firsrName:"Hassaan",
    lastName:"jahangir"
}
}
console.log(new_object)
console.log(new_object.author)