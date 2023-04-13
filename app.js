"use strict";

function Employee (id , fNme , department , level , img ){
     this.id = id;
     this.name = fNme ;
     this.department = department;
     this.level = level ;
     this.img = img ;
}

Employee.prototype.salaryCalc= function(){
     if(this.level === 'Senior'){
          this.salary = (Math.round (Math.random() * (2000 - 1500) + 1500));
     }
     else if(this.level === 'Mid-Senior'){
          this.salary = Math.round(Math.random() * (1500 - 1000) + 1000);
     }
     else if (this.level === 'Junior') {
          this.salary = Math.round (Math.random() * (1000 - 500) +  500);
     }
     return  (this.salary * 92.5) / 100 
}


Employee.prototype.employeePara = function(){
     return `Hello ${this.name} your Salary is ${this.salaryCalc()}`
}




let main = document.getElementById("main")

for( let i = 1 ; i <= 7 ; i++){
     
     let para = document.createElement("p");
     para.setAttribute("class" , `p`)
     main.append(para)

}

let clss = document.querySelectorAll(".p")


let user1 = new Employee(1000 ,'Ghazi Samer' , 'Administration' ,'Senior','url' ) 
let user2 = new Employee(1001	,'Lana Ali','Finance','Senior','url' ) 
let user3 = new Employee(1002	,'Tamara Ayoub	','Marketing','Senior','url' ) 
let user4 = new Employee(1003	,'Safi Walid','Finance','Mid-Senior','url' ) 
let user5 = new Employee(1004	,'Omar Zaid','Development','Senior','url' ) 
let user6 = new Employee(1005	,'Rana Saleh','Finance','Junior','url' ) 
let user7 = new Employee(1006	,'Hadi Ahmad','Development','Mid-Senior','url' ) 


let arr = [user1 , user2, user3, user4, user5, user6, user7]
for( let x = 0 ; x <= clss.length ; x++){
     
     clss[x].textContent = `${x + 1}. ${arr[x].employeePara()}`
     
}
