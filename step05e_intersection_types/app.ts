interface one{
    name1:string,
    age1:number
}
interface two{
    name2:string,
    age2:number
}
type intersection=one&two;
let my_object : intersection = {
    name1:"Muhammad",
    name2:"Hassaan",
    age1:18,
    age2:20
}
console.log(my_object)