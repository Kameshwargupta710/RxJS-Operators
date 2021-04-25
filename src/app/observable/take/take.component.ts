import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomName = ['Kameshwar','Rahul','Raj','Raju'];
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    const nameSource = from(this.randomName);

    // Ex No 1
    nameSource.pipe(
      take(3)
    ).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer');
    })

    // Ex No 2
    nameSource.pipe(
      takeLast(3)
    ).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer2');
    })

    // Ex No 3
    const source = interval(1000);

    const condition1 = timer(6000);
    const condition2 = fromEvent(document,'click')

    
    source.pipe(
      map(res=>'Number '+res),
      takeUntil(condition2)
    ).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer3');
    })



  }

}
