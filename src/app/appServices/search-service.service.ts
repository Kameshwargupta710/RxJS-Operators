import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  
  constructor(private http : HttpClient) { }

  getData(data):Observable<any>{
    console.log(data);
    return of([
      {            
        "time" : "4 Second Ago.",      
        "username": "Kameshwar Gupta",
        "para": "Commented on your #Uxtrendz Post: Awesome Post !!!!! Thanks..."
      },
      {      
        "time": "6 Second Ago.",      
        "username": "Rahul Gupta",
        "para": "Commented on your #Uxtrendz Post: Awesome Post !!!!! Thanks..."
      },
      {      
        "time": "4 Second Ago.",      
        "username": "Alex Johnson",
        "para": "Commented on your #Uxtrendz Post: Nice Post !!!!! Thanks..."
      },
      {            
        "time": "8 Second Ago.",      
        "username": "Alex Johnson",
        "para": "Commented on your #Uxtrendz Post: G Post !!!!! Thanks..."
      }
    ]);
  }
}
