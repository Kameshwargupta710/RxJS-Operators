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

const routes: Routes = [
  { path: '', redirectTo: '/promise', pathMatch: 'full'},
  { path: 'promise', component: PromiseComponent},
  { path: 'observables', component: ObservableComponent, children:[
    { path: '', component: ListComponent},
    { path: 'fromEvent', component: FromEventComponent},
    { path: 'interval', component: IntervalComponent},
    { path: 'of-from', component: OfFromComponent},
    { path: 'to-array', component: ToArrayComponent}
  ]},
  { path: 'async-await', component: AsyncAwaitComponent},  
  { path: '**', component: PromiseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
