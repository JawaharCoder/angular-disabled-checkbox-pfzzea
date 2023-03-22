import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  note = {

  };

  ReadOnlyStyleGuideNotes: boolean;
  Note1Checked: boolean;

  ngOnInit() {
    this.ReadOnlyStyleGuideNotes = true;
    this.Note1Checked = false;
  }

  toggleNoteState () { }

  isNoteChecked () {}

}
