import {Component} from "@angular/core";

import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [
    ...ROUTER_DIRECTIVES
  ]
})
export class App{}