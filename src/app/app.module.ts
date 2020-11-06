import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UploadComponent } from './upload/upload.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFileUploadModule } from 'mat-file-upload';
import {  MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { Dash2Component } from './dash2/dash2.component';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxEventCalendarModule} from 'ngx-event-calendar';
import { ApplyComponent } from './apply/apply.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    UploadComponent,
    FormComponent,
    AppointmentComponent,
    Dash2Component,
    TreeComponent,
    ApplyComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFileUploadModule,
    DragDropModule,
    MatDialogModule,
    MatTreeModule,
    FlexLayoutModule,
    NgxEventCalendarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
