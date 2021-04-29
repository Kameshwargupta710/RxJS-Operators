import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

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


    // Ex 2 | map + mergeAll
    source.pipe(
      map(res=>this.getVideos(res)),
      concatAll()
    ).subscribe((res)=>{
      this._du.print(res,'elContainer2');
    })


    // Ex 3 | mergeMap
    source.pipe(
      concatMap(res=>this.getVideos(res)),      
    ).subscribe((res)=>{
      this._du.print(res,'elContainer3');
    })
  }

}
