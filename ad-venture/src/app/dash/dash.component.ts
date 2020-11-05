import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  products = [
    {
      title : 'Growth Grant',
      steps : [
        {
          title : 'Complete Growth Grant application form',
          type : 'form'
        },
        {
          title : 'Upload proof of identity',
          type : 'docupload'
        },
        {
          title : 'Sign agreement',
          type : 'sign'
        },
        {
          title : 'Accept welcome appointment',
          type : 'appt'
        }
      ]
    },
    {
      title : 'Northen MAX3'
    },
    {
      title : 'One-to-one mentoring'
    }
];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
