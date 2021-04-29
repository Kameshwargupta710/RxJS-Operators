import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map-notification',
  templateUrl: './concat-map-notification.component.html',
  styleUrls: ['./concat-map-notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConcatMapNotificationComponent implements OnInit {

  notifyData = [
    {
      name: 'Facebook',
      icon: '../../../assets/Images/facebook.png',
      time: '4 Second Ago.',
      img: '../../../assets/Images/download (1).jpg',
      username: 'Kameshwar Gupta',
      para: 'Commented on your #Uxtrendz Post: Awesome Post !!!!! Thanks...'
    },
    {
      name: 'Facebook',
      icon: '../../../assets/Images/facebook.png',
      time: '6 Second Ago.',
      img: '../../../assets/Images/download (2).jpg',
      username: 'Rahul Gupta',
      para: 'Commented on your #Uxtrendz Post: Awesome Post !!!!! Thanks...'
    },
    {
      name: 'Facebook',
      icon: '../../../assets/Images/facebook.png',
      time: '4 Second Ago.',
      img: '../../../assets/Images/download (1).jpg',
      username: 'Alex Johnson',
      para: 'Commented on your #Uxtrendz Post: Nice Post !!!!! Thanks...'
    },
    {
      name: 'Twitter',
      icon: '../../../assets/Images/twitter.jfif',
      time: '8 Second Ago.',
      img: '../../../assets/Images/download (3).jpg',
      username: 'Alex Johnson',
      para: 'Commented on your #Uxtrendz Post: G Post !!!!! Thanks...'
    },
  ]
  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {

    from(this.notifyData).pipe(
      concatMap(res => this.getHtml(res)),      
    ).subscribe(res=>{
      this._du.print2(res,'elContainer');
    });

    
  }


  getHtml(data){
    return of(`<div class="header">
    <div class="app">
        <img src="${data.icon}" alt="" width="20">${data.name}
    </div>
    <div class="time">${data.time}</div>
  </div>
  <div class="body">
    <img src="${data.img}" alt="" class="item-img" width="60" 
    height="60">
    <strong>${data.username}</strong>
    <p>${data.para}</p>
  </div>`).pipe(delay(1000))
  }

}
