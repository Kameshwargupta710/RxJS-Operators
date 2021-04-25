import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  username: string = '';
  constructor(private _du: DesignUtilityService) { 
    this._du.username.subscribe((res)=>{
      this.username = res;
    })
  }

  ngOnInit(): void {
  }

  onChange(username){    
    this._du.username.next(username.value);
  }

}
