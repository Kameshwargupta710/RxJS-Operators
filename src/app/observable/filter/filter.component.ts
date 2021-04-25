import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    { id: 1, name: 'Kameshwar', gender: 'Male'},
    { id: 2, name: 'Rahul', gender: 'Male'},
    { id: 3, name: 'Ramesh', gender: 'Male'},
    { id: 4, name: 'Raj', gender: 'Male'},
    { id: 5, name: 'Anushka', gender: 'Female'},
    { id: 6, name: 'Asha', gender: 'Female'},
    { id: 7, name: 'Ashish', gender: 'Male'}
  ]

  data = [];
  data2 = [];
  data3 = [];
  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr)

    // Ex No 1 Filter By Length
    source.pipe(
      filter(member=>member.name.length > 6),
      toArray()).subscribe((res)=>{
      console.log(res);
      this.data = res;
    })


    // Ex No 2 Filter By Gender
    source.pipe(
      filter(member=>member.gender == 'Male'),
      toArray()).subscribe((res)=>{
      console.log(res);
      this.data2 = res;
    })

    // Ex No 3 Filter By nth Item
    source.pipe(
      filter(member=>member.id <= 6),
      toArray()).subscribe((res)=>{
      console.log(res);
      this.data3 = res;
    })

  }

}
