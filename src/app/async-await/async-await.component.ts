import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit, AfterViewInit {

  result1: any;
  result2: any;
  result3: any;

  dell: Object = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  response: object;

  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Data Received');
    },3000)
  });

  constructor() { }

  // async keyword with function always return promise
  async getData(){
    let response = await this.promise;
    console.log(response);
  }

  

  ngOnInit(): void {
    // this.getData().then((res)=>{
    //   console.log(res)
    // });  
    
    this.getData();
  }

  ngAfterViewInit(): void {
    this.result1 = document.getElementById('result1');
    this.result2 = document.getElementById('result2');
    this.result3 = document.getElementById('result3');
  }


  buyLaptop = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(this.dell);
    },3000)
  });

  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())


  
  // Example 1 With Promise

  fetch1(){
    this.result1.innerHTML = 'Fetching Data...'
    this.buyLaptop.then((res)=>{
      this.result1.innerHTML = JSON.stringify(res);
    })
  }




  // Example 2 With Async / Await

  async fetch2(){
    this.result2.innerHTML = 'Fetching Data...';

    let data = await this.buyLaptop;
    this.result2.innerHTML = JSON.stringify(data);
  }




  // Example 3 With Fetch API
  // Promise
  // fetch3(){
  //   this.result3.innerHTML = 'Fetching Data...';    
  //   this.buyLaptop2.then((res)=>{
  //     this.result3.innerHTML = JSON.stringify(res);
  //   })
  // }


  // Async / Await
  async fetch3(){
    this.result3.innerHTML = 'Fetching Data...';        
    this.result3.innerHTML = JSON.stringify(await this.buyLaptop2);
  }


}
