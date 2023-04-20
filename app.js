"use strict";

function Employee ( fNme  , department , level , img , salary , id){
     this.name = fNme ;
     this.department = department;
     this.level = level ;
     this.img = img ;
     this.salary = salary;
     this.id = id;
}

Employee.emData = []
let data = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []


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

Employee.prototype.randomID = function (){
     this.idNum = Math.round(Math.random() * (2000 - 1000) + 1000)
     return this.idNum
}

let form = document.getElementById("form")  
let main = document.getElementById("main")
let cardContaner1 = document.createElement("div")
let cardContaner2 = document.createElement("div")
let cardContaner3 = document.createElement("div")
let cardContaner4 = document.createElement("div")

cardContaner1.classList.add("cards1")
cardContaner2.classList.add("cards2")
cardContaner3.classList.add("cards3")
cardContaner4.classList.add("cards4")


main.append(cardContaner1)
main.append(cardContaner2)
main.append(cardContaner3)
main.append(cardContaner4)


function clicked (e){
     e.preventDefault()
     let fullName = e.target.fullName.value ;
     let deparVAlue = e.target.Department.value;
     let position = e.target.selectLevel.value;
     let imgUrl = e.target.url.value; 
     
     let userObj = new Employee(fullName , deparVAlue , position  , imgUrl, 0 , 0)
     userObj.salary = userObj.salaryCalc()
     userObj.id = userObj.randomID()

     let card = document.createElement("div")
     card.classList.add("card")

     if (deparVAlue === "Administration") {     
          cardContaner1.append(card)
          cardContaner1.style.borderBottom = "5px solid #0f29208a"
          cardContaner1.style.display = "flex"
     }else if( deparVAlue === "Marketing"){
          cardContaner2.append(card)
          cardContaner2.style.borderBottom = "5px solid #0f29208a"
          cardContaner2.style.display = "flex"
     }
     else if( deparVAlue === "Development"){
          cardContaner3.append(card)
          cardContaner3.style.borderBottom = "5px solid #0f29208a"
          cardContaner3.style.display = "flex"
     }
     else if( deparVAlue === "Finance"){
          cardContaner4.append(card)
          cardContaner4.style.borderBottom = "5px solid #0f29208a"
          cardContaner4.style.display = "flex"
     }
     

     // card info
     let img = document.createElement("img")
     img.src = userObj.img
     card.append(img)

     let pName = document.createElement("p");
     pName.textContent = `Name : ${userObj.name} -ID: ${userObj.id}`
     card.append(pName)

     let pDepartment = document.createElement("p");
     pDepartment.textContent = `Department : ${userObj.department} -Level: ${userObj.level}`
     card.append(pDepartment)

     let pSalary = document.createElement("p");
     pSalary.textContent = `Salary : ${userObj.salary}`
     card.append(pSalary)

     // save data to array
     Employee.emData = data
     Employee.emData.push(userObj)
     let strData = JSON.stringify(Employee.emData)
     localStorage.setItem("data" , strData)
}

// render old Data 

for ( let i = 0 ; i < data.length ; i++){
     let card = document.createElement("div")
     card.classList.add("card")
     
     let img = document.createElement("img")
     img.src = data[i].img
     card.append(img)
     
     let pName = document.createElement("p");
     pName.textContent = `Name : ${data[i].name} -ID: ${data[i].id}`
     card.append(pName)
     
     let pDepartment = document.createElement("p");
     pDepartment.textContent = `Department : ${data[i].department} -Level: ${data[i].level}`
     card.append(pDepartment)
     
     let pSalary = document.createElement("p");
     pSalary.textContent = `Salary : ${data[i].salary}`
     card.append(pSalary)

     if (data[i].department === "Administration") {     
          cardContaner1.appendChild(card)
          cardContaner1.style.display = "flex"
          cardContaner1.style.borderBottom = "5px solid #0f29208a"
     }else if(data[i].department === "Marketing"){
          cardContaner2.append(card)
          cardContaner2.style.borderBottom = "5px solid #0f29208a"
          cardContaner2.style.display = "flex"
     }
     else if( data[i].department === "Development"){
          cardContaner3.append(card)
          cardContaner3.style.borderBottom = "5px solid #0f29208a"
          cardContaner3.style.display = "flex"
     }
     else if( data[i].department === "Finance"){
          cardContaner4.append(card)
          cardContaner4.style.borderBottom = "5px solid #0f29208a"
          cardContaner4.style.display = "flex"
     }

}     










form.addEventListener("submit" , clicked)
