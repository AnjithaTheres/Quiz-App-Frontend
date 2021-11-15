import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz-App';
  constructor(

    private router: Router,

) {}

onlogout() {
    this.router.navigate(['/'])
}

}

