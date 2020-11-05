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

  constructor(private breakpointObserver: BreakpointObserver) { }
}
