import inquirer from "inquirer";
    let userInfo=[{
        name:"UserName",
        type:"input",
        message:"Enter Your Name: "
    
    }];
    let option=[{
        name:"Number",
        type:"number",
        message:"Enter the number between 0-10",
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Select Number Only";
            }
            return true;
        }
    }];
    let againPlay=[{
        name:"again",
        type:"confirm",
        message:"Do You Want to Play again"
    }];
    
    async function Number_Guess(){
        const {UserName}=await inquirer.prompt(userInfo);
        let score=0;
        let condition=true;
        while(condition){
        const {Number}=await inquirer.prompt(option);
        let number: number = Math.random() * 10;
        number = parseInt(number.toFixed(0));
        if(Number==number){
            console.log("Congratulations You Guess Right Number");
            score+=10;
        }
        else{
            console.log("Wrong Number!!!!!!");
            console.log(`Actual number is ${number}`);
        }
        const {again}=await inquirer.prompt(againPlay);
        condition=again;
        }
        console.log(`${UserName} Your Total Score is ${score}`);
    }
export {Number_Guess};