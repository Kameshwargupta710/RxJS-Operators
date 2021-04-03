import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  users = [
    {name: 'Anup', skill: 'Angular'},
    {name: 'Shekhar', skill: 'Html, Css'},
    {name: 'Sharma', skill: 'JavaScript'},
    {name: 'Uxtrendz', skill: 'TypeScript'}
  ]
  sourceSub: Subscription;
  constructor() { }

  ngOnInit(): void {

    // Ex : 1
    const source = interval(1000);

    this.sourceSub = source.pipe(
      take(5),
      toArray()
      ).subscribe((res)=>{
      console.log(res);      
    })

    // Ex : 2
    const source2 = from(this.users);
    source2.pipe(
      toArray()
      ).subscribe((res)=>{
      console.log(res);
    })


    // Ex : 3
    const source3 = of('Anup','Shekhar','Sharma','Uxtrendz');
    source3.pipe(
      toArray()
      ).subscribe((res)=>{
      console.log(res);
    })
  }

  



}
