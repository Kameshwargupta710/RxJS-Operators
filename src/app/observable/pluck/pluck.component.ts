import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  user = [
    { name : 'Kameshwar', skills : 'Angular', job: { title : 'Full Stack Developer', experience : '3 Years'}},
    { name : 'Rahul', skills : 'HTML', job: { title : 'FrontEnd Developer', experience : '3 Years'}},
    { name : 'Raj', skills : 'CSS', job: { title : 'Full Stack Developer', experience : '3 Years'}},
    { name : 'Ramesh', skills : 'JavaScript', job: { title : 'Full Stack Developer', experience : '3 Years'}},    
  ]
  data = [];
  data2 = [];
  constructor() { }

  ngOnInit(): void {

    // Ex No 1
    from(this.user).pipe(
      pluck('name'),toArray()
    ).subscribe((res)=>{
      console.log(res);
      this.data = res
    })

    // Ex No 2
    from(this.user).pipe(
      pluck('job','title'),toArray()
    ).subscribe((res)=>{
      console.log(res);
      this.data2 = res
    })
  }

}
