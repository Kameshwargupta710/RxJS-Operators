import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  sub1: Subscription;
  sub2: Subscription;
  msg1: any;
  msg2: any;
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    // Ex - 01 

    const broadCastVideos = interval(1000);

    this.sub1 = broadCastVideos.pipe(
      map((res)=>{return 'Video '+res})).subscribe((response)=>{
        this.msg1 = response;
      })

    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000)




    // Ex - 02     

    this.sub2 = broadCastVideos.pipe(
      map((res)=>{return res*3})).subscribe((response)=>{
        this.msg2 = response;
      })

    setTimeout(()=>{
      this.sub2.unsubscribe();
    },10000)


    // Ex - 03

    const members = from([
      { id: 1, name: 'Anup'},
      { id: 2, name: 'Kamesh'},
      { id: 3, name: 'Kameshwar'},
      { id: 4, name: 'Ashish'},
      { id: 5, name: 'Husnain'},
      { id: 6, name: 'Rajesh'},
      { id: 7, name: 'Vivek'},
      { id: 8, name: 'Janet'},
      { id: 9, name: 'Pankaj'}
    ]);

    members.pipe(map(data => data.name)).subscribe((response)=>{
      this._designUtility.print(response, 'elContainer');
    })


    
  }

}
