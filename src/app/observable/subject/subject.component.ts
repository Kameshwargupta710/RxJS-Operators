import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username: string = '';
  constructor(private _du: DesignUtilityService) { 
    this._du.exclusive.next(true);
    this._du.username.subscribe((res)=>{
      this.username = res;
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this._du.exclusive.next(false);
  }

}
