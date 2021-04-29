import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  getVideos(data){
    return of(data +' Video Uploaded').pipe(delay(1000));
  }
  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);

    // Ex 1 | map
    source.pipe(
      map(res=>this.getVideos(res))
    ).subscribe(res=>res.subscribe((res2)=>{
      this._du.print(res2,'elContainer');
    }))


    // Ex 2 | map + switchAll
    source.pipe(
      map(res=>this.getVideos(res)),
      switchAll()
    ).subscribe((res)=>{
      this._du.print(res,'elContainer2');
    })


    // Ex 3 | switchMap
    source.pipe(
      switchMap(res=>this.getVideos(res)),      
    ).subscribe((res)=>{
      this._du.apiServiceFlag = true;
      this._du.print(res,'elContainer3');
    },(error)=>{
      console.log(error)
    },()=>{
      this._du.apiServiceFlag = false;
    })
  }

}
