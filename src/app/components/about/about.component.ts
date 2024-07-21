import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  redirectToContct = () => {
    window.location.href = '#contact';
  };

  tooltipText = '';
  tooltipVisible = false;
  tooltipStyle = { left: '0px', top: '0px' };

  showTooltip(event: MouseEvent, text: string) {
    this.tooltipText = text;
    this.tooltipVisible = true;
    this.tooltipStyle.left = `${event.pageX + 10}px`;
    this.tooltipStyle.top = `${event.pageY + 10}px`;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.tooltipVisible) {
      this.tooltipStyle.left = `${event.pageX + 10}px`;
      this.tooltipStyle.top = `${event.pageY + 10}px`;
    }
  }
}
