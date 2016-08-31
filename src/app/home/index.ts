import {Component} from '@angular/core'
import AppBar from './app-bar'
import {Notes} from "./notes"

@Component({
  selector: 'home',
  directives: [AppBar, Notes],
  template: require('./home.html')
})
export default class Home {
}