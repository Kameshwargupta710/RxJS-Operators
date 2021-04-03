import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {
    // OF

    const Obs1 = of('Anup', 'Shekhar', 'Sharma');

    Obs1.subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer');
    })


    const Obs2 = of({a:'Anup', b:'Shekhar', c:'Sharma'});

    Obs2.subscribe((res)=>{      
      this.obsMsg = res;      
    })



    // From - Array
    let Arr = ['Uxtrendz','John','Alex'];
    const Obs3 = from(Arr);
    Obs3.subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer3');
    })


    // From - Promise
    const promise =  new Promise((resolve)=>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000)
    })
    
    const Obs4 = from(promise);
    Obs4.subscribe((res)=>{      
      this._designUtility.print(res, 'elContainer4');
    })


    // From - String
    const Obs5 = from('Welcome to Uxtrendz');
    Obs5.subscribe((res)=>{      
      this._designUtility.print(res, 'elContainer5');
    })
  }


  

}
