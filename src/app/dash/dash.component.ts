import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { FormComponent } from '../form/form.component';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  products = [
    {
      title: 'Growth Grant',
      steps: [
        {
          title: 'Complete Growth Grant application form',
          type: 'form',
          icon: 'note'
        },
        {
          title: 'Upload proof of identity',
          type: 'docupload',
          icon: 'attach_file'
        },
        {
          title: 'Sign agreement',
          type: 'sign',
          icon: 'create'
        },
        {
          title: 'Accept welcome appointment',
          type: 'appt',
          icon: 'book_online'
        }
      ]
    },
    {
      title: 'Northen MAX3',
      steps: [
        {
          title: 'Complete northern MAX3 application form',
          type: 'form',
          icon: 'note'
        },
        {
          title: 'Sign the Northern MAX3 agreement',
          type: 'sign',
          icon: 'create'
        },
      ]
    },
    {
      title: 'One-to-one mentoring',
      steps: [
        {
          title: 'Complete the AD:VENTURE one-to-one mentoring application',
          type: 'form',
          icon: 'note'
        },
        {
          title: 'Accept mentoring appointment',
          type: 'sign',
          icon: 'create'
        },
      ]
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }
  // tslint:disable-next-line: typedef

  openDialog(step) {

    switch (step.type)
    {
        case 'form' :
          this.dialog.open(FormComponent);
          break;
        case 'docupload' :
          this.dialog.open(UploadComponent);
          break;
        case 'appt' :
          this.dialog.open(AppointmentComponent);
          break;
    }
  }
}
