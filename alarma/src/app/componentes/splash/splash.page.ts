import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  showSplash = true;
  tiempo=3000;

  constructor(public router: Router) {}
  ngOnInit() { }

  onSubmit(){      
    this.router.navigate(['/login']);
  };

  timer(tiempo) {
    this.showSplash = false;
  }
}
