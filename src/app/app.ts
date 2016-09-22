import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {AppBar} from "./shared/components";

@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [
    AppBar,
    ...ROUTER_DIRECTIVES
  ]
})
export class App{}