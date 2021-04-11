import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  techStatus: string = "";
  techStatus2: string = "";
  name: string = "";
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    // Example 1 (Manual)

    const Obser1 = Observable.create((Observer)=>{
      setTimeout(()=>{
        Observer.next('HTML')
      },1000)

      setTimeout(()=>{
        Observer.next('CSS')
      },2000)

      setTimeout(()=>{
        Observer.next('JavaScript')
      },3000)


      setTimeout(()=>{
        Observer.next('Angular')                
        Observer.complete();        
      },4000)

      setTimeout(()=>{
        Observer.next('TypeScript')
        Observer.error(new Error('error'));        
      },5000)
    })


    Obser1.subscribe((response)=>{
      this._designUtility.print(response,'elContainer')      
    },
    (error)=>{
      this.techStatus = 'error'
    },
    ()=>{
      this.techStatus = 'completed';
    }
    )




    // Example 2 (Custom Interval Observable)

    const Obser2 = Observable.create((Observer)=>{
      let Arr = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript']
      let count = 0
      setInterval(()=>{        
        Observer.next(Arr[count]);
        if(count >= 3){
          Observer.error('error');          
        }else if(count >= 5){
          Observer.complete();
        }
        count++;
      },1000)
    })


    Obser2.subscribe((response)=>{
      this._designUtility.print(response,'elContainer2')
    },
    (error)=>{
      this.techStatus2 = 'error'
    },
    ()=>{
      this.techStatus2 = 'completed'
    })




    // Example 3 (Random Names)

  const Obser3 = Observable.create((Observer)=>{
    let Arr = ['Anup','Shekhar','Sharma','Uxtrendz','John','Alex','Robert']
    let count = 0
    setInterval(()=>{        
      Observer.next(Arr[count]);
      if(count >= 9){
        Observer.error('error');          
      }else if(count >= 7){
        Observer.complete();
      }
      count++;
    },1000)
  })


    Obser3.subscribe((response)=>{      
      this.name = response;
    },
    (error)=>{
      this.name = 'error'
    },
    ()=>{
      this.name = 'completed'
    })

  }



}
