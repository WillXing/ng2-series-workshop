import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'note-card',
  styles: [require('./note-card.css')],
  template: require('./note-card.html')
})
export class NoteCard{
  @Input() note = {}
  @Output() checked = new EventEmitter()

  onChecked() {
    this.checked.emit(this.note)
  }
}