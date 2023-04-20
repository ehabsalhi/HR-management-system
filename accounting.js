let data = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []

let obj = {
     Administration:{
          salary : 0 ,
          count : 1 ,
          totalSalary : 0 
     },
     Marketing:{
          salary : 0 ,
          count : 1 ,
          totalSalary : 0 
     },
     Development:{
          salary : 0 ,
          count : 1 ,
          totalSalary : 0 
     },
     Finance:{
          salary : 0 ,
          count : 1 ,
          totalSalary : 0 
     },
}


let tr1 = document.querySelector(".tr1")
let tr2 = document.querySelector(".tr2")
let tr3 = document.querySelector(".tr3")
let tr4 = document.querySelector(".tr4")


for( let i = 0 ; i < data.length ; i++ ){
     

     if(data[i].department === 'Administration')       
     {tr1.innerHTML = `
          <td>Administration</td>
           <td>${obj.Administration.count++}</td>
           <td>${ obj.Administration.totalSalary += data[i].salary}</td> 
           <td>${obj.Administration.salary = Math.round(obj.Administration.totalSalary / obj.Administration.count )}</td>`}
     
     else if(data[i].department === 'Marketing')       
     {tr2.innerHTML = 
          `<td>Marketing</td> 
          <td>${obj.Marketing.count++}</td>
          <td>${ obj.Marketing.totalSalary += data[i].salary}</td> 
          <td>${obj.Marketing.salary = Math.round(obj.Marketing.totalSalary / obj.Marketing.count )}</td>`}
     
     else if(data[i].department === 'Development')     
     {tr3.innerHTML = `
          <td>Development</td>
          <td>${obj.Development.count++}</td>
          <td>${ obj.Development.totalSalary += data[i].salary}</td> 
          <td>${obj.Development.salary = Math.round(obj.Development.totalSalary / obj.Development.count )}</td>`}
     
     else if(data[i].department === 'Finance')         
     {tr4.innerHTML = `
     <td>Finance</td>
     <td>${obj.Finance.count++}</td>
     <td>${ obj.Finance.totalSalary += data[i].salary}</td> 
     <td>${obj.Finance.salary = Math.round(obj.Finance.totalSalary / obj.Finance.count )}</td>`}
}

let total = obj.Administration.totalSalary + obj.Marketing.totalSalary + obj.Development.totalSalary + obj.Finance.totalSalary

let employeeNums = data.length

avgSalary = Math.round(total / employeeNums) ? Math.round(total / employeeNums) : 0

let tFoot = document.getElementById("tfoot");

tFoot.innerHTML+= `
<tr>
<th>--------------------</th>
<td>${employeeNums}</td>
<td>${total}</td>
<td>${avgSalary}</td>
</tr>
`