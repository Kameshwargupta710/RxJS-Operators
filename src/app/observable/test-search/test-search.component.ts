import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-search',
  templateUrl: './test-search.component.html',
  styleUrls: ['./test-search.component.scss']
})
export class TestSearchComponent implements OnInit {

  employee:string[] =  ["Choice", "Techlab", "Ankit", "Raj", "KITTY", "RAjendra","ankit","techlab"]

  

  empObj: object 

  searchTerm:string = "";
  searchedEmployee: string[] = []
  constructor() { }

  ngOnInit(): void {
    this.empObj = {
      name:"Kameshwar",
      department:"IT",
      age:"24"
    }
    // let newEmpObj1 = Object.create(this.empObj);
    // console.log("Object Create => ",newEmpObj1);
    let newEmpObj2 = Object.assign(this.empObj);
    console.log("Object Assign => ",newEmpObj2)
    let newEmpObj3 = JSON.parse(JSON.stringify(this.empObj));
    console.log("Object JSON => ",newEmpObj3);

    this.getNoteCount();
    
  }

  searchEmployee(){
    let searchedEmployee = this.employee.filter((value)=>{
      return value.toLocaleLowerCase().indexOf(this.searchTerm.toLocaleLowerCase()) != -1
    })
    console.log(searchedEmployee) 
    this.searchedEmployee =  [...new Set(searchedEmployee.map(value=>value.toLocaleLowerCase()))]  
    console.log(this.searchedEmployee)
  }

  getNoteCount(){
    let input = 24;
    let atmNote = [20,10,5,2,1];
    let noteCount = [];

    let totalNoteValue = atmNote.reduce((total,value)=>{
      return total + value;
    })

    let reminder = input%totalNoteValue;
    let count = Math.floor(input/totalNoteValue);
    
    atmNote.forEach((value,i)=>{
      noteCount[i] = Math.floor(reminder/value);
      noteCount[i] = noteCount[i] + count;
      reminder = reminder%value;
    })

    console.log(noteCount);

  }

}
