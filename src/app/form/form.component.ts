import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.addEventListener('load', function() {
  //    renderSurvey('surveyDiv', 'Bert', 'Hair', 'bert.hair@contoso.com', 'Product Overview');
  }, false);


  }

}
