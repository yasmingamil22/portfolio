import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(min-width: 992px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }



  redirectToProject = () => {
    window.location.href = '#projects';
  };

  redirectToAbout = () => {
    window.location.href = '#about';
  };
}
