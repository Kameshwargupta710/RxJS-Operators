import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableComponent } from './observable/observable.component';
import { RouterModule } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './observable/filter/filter.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    ObservableComponent,    
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    CalculatorComponent,
    FilterComponent,
    PluckComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMapNotificationComponent,
    SwitchMapComponent,
    SwitchMapSearchComponent,
    TestSearchComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestWithlatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
