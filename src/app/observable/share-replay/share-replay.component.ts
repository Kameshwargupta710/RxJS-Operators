import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, filter, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {


  allProducts: any;
  mobile: any;
  laptop: any;
  baseUrl: string = "http://localhost:3000/sharereplay";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.allProducts = this.http.get(this.baseUrl).pipe(
      shareReplay()
    );

    console.log(this.allProducts);

    this.mobile = this.allProducts.pipe(
      map((value:any) => {
        return value.filter(res=>{
        return res['type'] == "Mobile"
        })
      })
    )

    console.log(this.mobile);

    this.laptop = this.allProducts.pipe(
      map((value:any) => {
        return value.filter(res=>{
        return res['type'] == "PC"
        })
      })
    )    
    console.log(this.laptop);

  }

}
