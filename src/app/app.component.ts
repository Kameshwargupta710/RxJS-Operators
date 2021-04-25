import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from './appServices/design-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  exclusive: boolean = false;

  constructor(private _du: DesignUtilityService){
    
  }

  ngOnInit(){
    this._du.exclusive.subscribe((res)=>{
      this.exclusive = res;
    })
  }
}
