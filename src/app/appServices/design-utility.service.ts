import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Kameshwar');
  videoEmit = new ReplaySubject<string>(3,6000);
  asyncVideoEmit = new AsyncSubject();
  apiServiceFlag : boolean = false;
  

  constructor() { }

  print(val, containerId){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);    
  }

  print2(val, containerId){
    let el = document.createElement('div');
    el.setAttribute('class','item');
    el.innerHTML = val;
    document.getElementById(containerId).prepend(el);    
  }
}
