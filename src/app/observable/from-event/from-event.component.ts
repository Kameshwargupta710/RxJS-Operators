import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res)=>{
      let countVal = 'Video '+ count++;
      this._designUtility.print(countVal,'elContainer');
      this._designUtility.print(countVal,'elContainer2');
    })
  }

  

}
