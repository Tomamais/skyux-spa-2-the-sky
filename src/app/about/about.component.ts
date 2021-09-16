import { Component } from '@angular/core';
import { AboutService } from '../shared/about.service';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public team: any;

  constructor(
    aboutService: AboutService
  ) {
    this.team = aboutService.getUsers();
  }
}
