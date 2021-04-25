import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  dataArr = ['Kameshwar','Rahul','Raj','Ramesh']
  colors = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet']
  data:number[];
  myColor: string = '';
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    const source = interval(1000);
    // Ex No 1
    let sourceSubscription : Subscription
    sourceSubscription = source.pipe(
      tap(res=>console.log('Tap => '+res)),
      tap((res)=>{
        if(res == 4){
          sourceSubscription.unsubscribe();
        }
      }),
      map(res=>this.dataArr[res]),
      tap(res=>console.log('Tap => '+res)),
    ).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer');      
    })



    // Ex No 2
    let sourceSubscription2 : Subscription
    sourceSubscription2 = source.pipe(      
      tap((res)=>{
        this.myColor = this.colors[res]
        if(res == 7){
          sourceSubscription2.unsubscribe();
        }
      }),
      map(res=>this.colors[res]),      
    ).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer2');      
    })
  }

}
