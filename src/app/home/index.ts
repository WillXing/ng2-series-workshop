import {Component} from '@angular/core'
import AppBar from './app-bar'

@Component({
  selector: 'home',
  directives: [AppBar],
  template: require('./home.html')
})
export default class Home {
}