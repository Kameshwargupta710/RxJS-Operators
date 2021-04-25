import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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
