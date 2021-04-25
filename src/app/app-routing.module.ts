import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PromiseComponent } from './promise/promise.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FilterComponent } from './observable/filter/filter.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';

const routes: Routes = [
  { path: '', redirectTo: '/promise', pathMatch: 'full'},
  { path: 'promise', component: PromiseComponent},
  { path: 'observables', component: ObservableComponent, children:[
    { path: '', component: ListComponent},
    { path: 'fromEvent', component: FromEventComponent},
    { path: 'interval', component: IntervalComponent},
    { path: 'of-from', component: OfFromComponent},
    { path: 'to-array', component: ToArrayComponent},
    { path: 'custom', component: CustomComponent},
    { path: 'map', component: MapComponent},
    { path: 'pluck', component: PluckComponent},
    { path: 'filter', component: FilterComponent},
    { path: 'tap', component: TapComponent},
    { path: 'take', component: TakeComponent},
    { path: 'retry', component: RetryComponent}, 
    { path: 'debounce-time', component: DebounceTimeComponent},
    { path: 'subject', component: SubjectComponent}, 
    { path: 'replay-subject', component: ReplaySubjectComponent},    
  ]},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'async-await', component: AsyncAwaitComponent},  
  { path: '**', component: PromiseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
