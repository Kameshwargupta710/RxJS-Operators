import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  getVideos(data){
    return of(data +' Video Uploaded');
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
      mergeAll()
    ).subscribe((res)=>{
      this._du.print(res,'elContainer2');
    })


    // Ex 3 | mergeMap
    source.pipe(
      mergeMap(res=>this.getVideos(res)),      
    ).subscribe((res)=>{
      this._du.print(res,'elContainer3');
    })
  }

}
