import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, exhaustMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  baseUrl: string = "http://localhost:3000/data"
  @ViewChild ('btn') btn : ElementRef;
  num: number = 0;
  apiData: number = 0;
  fetchingAPI: boolean = false;
  constructor(private http: HttpClient, private _du: DesignUtilityService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this._du.apiServiceFlag = true),
      exhaustMap(()=>this.changeData(++this.num))
    ).subscribe((value)=>{
      console.log(value)
      this.getData();
    })
  }  

  getData(){
    this.http.get<any>(this.baseUrl).subscribe((value )=>{
      this.apiData = value.data;
      this._du.apiServiceFlag = false;
    });
  }

  changeData(num){
    return this.http.put(this.baseUrl,{"data":num});
  }

}
