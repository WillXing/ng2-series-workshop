import {Component} from "@angular/core";
import {NoteCard} from "./note-card";

@Component({
  selector: 'notes',
  directives: [NoteCard],
  styles: [require('./notes.css')],
  template: require('./notes.html')
})
export class Notes {
  notes = [
    {title: 't11', value: 'v'},
    {title: 't22', value: 'v2'}
  ]

  onEventChecked(note, i) {
      this.notes.splice(i, 1)
  }
}