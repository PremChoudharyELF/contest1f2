const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 25, profession: "admin" }
  ];
  
  
  
  // 1. Print Developers
  function printDeveloper() {
  
    data.forEach(employee=>{
      if(employee.profession=="developer"){
        console.log(employee);
      }
    });
  
    
  }
  
  
  
  
  
  // 2. Add Data
  function addData() {
    // let name= prompt("Enter your name: ");
    // let age =prompt("Enter your age: ");
    // let profession= prompt("Enter your profession: ")
  
    let addEmployee={
      name: prompt("Enter your Name: "),
      age: Number(prompt("Enter your Age: ")),
      profession: prompt("Enter your Role: ")
    }
  
    data.push(addEmployee);
    console.log(data);
  
  
  }
  
  
  
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0;i<data.length;i++){
      if(data[i].profession=="admin"){
        data.splice(i,1);
        i--;
      }
    }
    console.log(data);
  }
  
  
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummy_array=["I'm the dummy_array here",
      {name: "green_apple", age: 6, profession: "being_fruit"},
      {name: "tangy_mango", age: 4, profession: "flavouring"}
    ];
    const concatenatedArray = data.concat(dummy_array);
    console.log(concatenatedArray);
    
  }
  
  
  
  // 5. Average Age
  function averageAge() {
    const arr_length= data.length;
    let sum=0;
    data.forEach(employee=>{
      sum+=employee.age;
    });
    
    const avg_age=(Math.floor(sum/arr_length));
    console.log("Total_age: "+sum+"\n"+"Total_employee: "+arr_length+"\n"+"Average_age: "+avg_age);
  }
  
  
  
  
  // 6. Age Check
  function checkAgeAbove25() {
  
    for(let i=0;i<data.length;i++){
      if(data[i].age>25){
        console.log("Is any empolyee above 25: "+true);
        return;
      }
    }
    console.log("Is any empolyee above 25: "+false);
    return;
  }
  
  
  
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfessionsArray=[];
  
    data.forEach(employee=>{
      const profession_of_employee= employee.profession;
      // console.log(profession_of_employee);
      if(!uniqueProfessionsArray.includes(profession_of_employee)){
        uniqueProfessionsArray.push(profession_of_employee);
      }
    });
    console.log(uniqueProfessionsArray);
  }
  
  
  
  
  
  // 8. Sort by Age
  function sortByAge() {
  
    //Here I'm using array's built in method sort(a,b)
    // in which I pass 2 arguments a & b
  
    data.sort((a,b)=> a.age - b.age);
    console.log(data);
  }
  
  
  
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(employee=>{
      if(employee.name=="john"){
        employee.profession="manager";
      }
    });
    console.log(data);
  }
  
  
  
  
  
  // 10. Profession Count
  function getTotalProfessions() {
    let total_countof_admins_developers=0;
    data.forEach(employee=>{
      if(employee.profession=="developer" || employee.profession=="admin"){
        total_countof_admins_developers++;
      }
    });
    console.log("Total count of Admins + Developers: "+total_countof_admins_developers);
  }