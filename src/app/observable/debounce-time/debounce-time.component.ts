import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {

  @ViewChild('myInput') myInput : ElementRef;
  requestedData = null;

  @ViewChild('myInput2') myInput2 : ElementRef;
  requestedData2 = null;
  constructor() { }

  ngAfterViewInit(): void {
    // Ex No 1 DebounceTime
    const searchTearm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
      map(res=>res.target.value),
      debounceTime(1000)
    )

    searchTearm.subscribe((res)=>{
      console.log(res);
      this.requestedData = res;

      setTimeout(()=>{
        this.requestedData = null;
      },1000)
    })



    // Ex No 2 DistinctUntilChanged
    const searchTearm2 = fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
      map(res=>res.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    searchTearm2.subscribe((res)=>{
      console.log(res);
      this.requestedData2 = res;

      setTimeout(()=>{
        this.requestedData2 = null;
      },1000)
    })
  }

}
