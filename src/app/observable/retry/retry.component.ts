import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  apiResponse:object = null;
  fetchedData: boolean = false;
  status: string = '';
  constructor(private http : HttpClient) { }

  ngOnInit(): void {    
  }

  fetchingData(){
    this.fetchedData = true;
    this.status = 'Fetching...';
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      // retry(3),
      retryWhen((error)=>{
        return error.pipe(
        delay(3000),
        scan((retryCount,response)=>{
          if(retryCount >= 5){
            throw error;
          }else{  
            console.log(response);          
            retryCount = retryCount + 1;
            console.log('Retry Count => '+ retryCount);
            this.status = 'Retry Count => #'+ retryCount;
            return retryCount;
          }
        },0))
      })
      ).subscribe((res)=>{
      this.apiResponse = res;
      this.fetchedData = false;
      this.status = 'Data Fetched';
    },(error)=>{
      this.fetchedData = false;
      this.status = 'No Data';
    })
  }

}
