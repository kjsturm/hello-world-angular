import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { UtilityService } from './utility.service';
import { HttpClientModule } from '@angular/common/http';
import { MarqueeComponent } from './marquee/marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ControlPanelComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    MarqueeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
