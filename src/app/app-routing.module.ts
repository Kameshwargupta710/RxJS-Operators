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
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMapNotificationComponent } from './observable/concat-map-notification/concat-map-notification.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './observable/switch-map-search/switch-map-search.component';
import { TestSearchComponent } from './observable/test-search/test-search.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombineLatestWithlatestComponent } from './observable/combine-latest-withlatest/combine-latest-withlatest.component';

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
    { path: 'async-subject', component: AsyncSubjectComponent}, 
    { path: 'concat', component: ConcatComponent},
    { path: 'merge', component: MergeComponent},
    { path: 'merge-map', component: MergeMapComponent},
    { path: 'concat-map', component: ConcatMapComponent},   
    { path: 'concat-map-notification', component: ConcatMapNotificationComponent},
    { path: 'switch-map', component: SwitchMapComponent},
    { path: 'switch-map-search', component: SwitchMapSearchComponent},
    { path: 'exhaust-map', component: ExhaustMapComponent},
    { path: 'share-replay', component: ShareReplayComponent},    
    { path: 'combine-latest-withlatest', component: CombineLatestWithlatestComponent},
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
