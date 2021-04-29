import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit;
  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe((res)=>{
      this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video){
    this._du.asyncVideoEmit.next(video.value);
  }

  onComplete(){
    this._du.asyncVideoEmit.complete();
  }

}
