import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { SearchServiceService } from 'src/app/appServices/search-service.service';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm : NgForm
  notifyData = []
  // notifyData = [
  //   {            
  //     time: '4 Second Ago.',      
  //     username: 'Kameshwar Gupta',
  //     para: 'Commented on your #Uxtrendz Post: Awesome Post !!!!! Thanks...'
  //   },
  //   {      
  //     time: '6 Second Ago.',      
  //     username: 'Rahul Gupta',
  //     para: 'Commented on your #Uxtrendz Post: Awesome Post !!!!! Thanks...'
  //   },
  //   {      
  //     time: '4 Second Ago.',      
  //     username: 'Alex Johnson',
  //     para: 'Commented on your #Uxtrendz Post: Nice Post !!!!! Thanks...'
  //   },
  //   {            
  //     time: '8 Second Ago.',      
  //     username: 'Alex Johnson',
  //     para: 'Commented on your #Uxtrendz Post: G Post !!!!! Thanks...'
  //   },
  // ]
  
  constructor(private searchService : SearchServiceService) { }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges

    formValue.pipe(
      filter(()=>{
        return this.searchForm.valid
      }),
      pluck('searchTerm'),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((res)=>{
        return this.searchService.getData(res)
      })).subscribe((res)=>{
        this.notifyData = res;
      })
    
  }

}
