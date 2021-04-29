import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  user1List = ['Angular 1', 'Angular 2'];
  user2List = [];
  user3List = [];

  // Subscribe Modes
  subscribeMode2:boolean=false;
  subscribeMode3:boolean=false;


  // Subscription
  subscription2: Subscription;
  subscription3: Subscription;

  methodInterval: boolean = false;
  intervalSubscription: Subscription;

  constructor(private _du : DesignUtilityService) { 
    this._du.videoEmit.subscribe((res)=>{
      this.user1List.push(res);
    })
  }

  ngOnInit(): void {
  }

  user2subscribe(){    
    if(this.subscribeMode2){
      this.subscription2.unsubscribe()
    }else{
      this.subscription2 = this._du.videoEmit.subscribe((res)=>{
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
    
  }

  user3subscribe(){    
    if(this.subscribeMode3){
      this.subscription3.unsubscribe()
    }else{
      this.subscription3 = this._du.videoEmit.subscribe((res)=>{
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
    
  }

  onVideoAdd(video){
    this._du.videoEmit.next(video.value);
  }

  toggleMethod(){
    this.methodInterval = !this.methodInterval;
    const broadCastVideo = interval(1000);
    if(this.methodInterval){      
      this.intervalSubscription = broadCastVideo.subscribe((res)=>{
        this._du.videoEmit.next('Video '+res);
      })
    }else{
      this.intervalSubscription.unsubscribe();
    }    
    
  }

}
