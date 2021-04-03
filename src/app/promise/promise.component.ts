import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseResponse: string = '';

  constructor() { }

  DellAvailable(){
    return true
  }

  HPAvailable(){
    return false
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject)=>{
      // resolve('Promise is resolve');
      // reject('Promise is reject');
      if(this.DellAvailable()){        
        setTimeout(()=>{
          resolve("Dell is purchased");
        },3000)
      }else if(this.HPAvailable()){        
        setTimeout(()=>{
          resolve("HP is purchased");
        },1000)
      }else{
        setTimeout(()=>{
          reject('Laptop is not available');
        },1000)
        
      }
    })

    buyLaptop.then((res:string)=>{
      this.promiseResponse = res ;            
    }).catch((res:string)=>{
      this.promiseResponse = res ;
    })
  }

  

  myFunction(){
    console.log()
  }

}
