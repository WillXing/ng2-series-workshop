import {Component} from '@angular/core'
import Home from './home'

@Component({
  selector: 'app',
  directives: [Home],
  template: require('./app.html')
})
export default class App {

}