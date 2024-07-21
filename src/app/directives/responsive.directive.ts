import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Responsive]'
})
export class ResponsiveDirective {
  constructor(
    private element: ElementRef,
    private breakPointObserver: BreakpointObserver

  ) {
    this.breakPointObserver
    .observe([
      '(min-width: 993px)',
      '(max-width: 992px)'
    ])
    .subscribe((result: BreakpointState) => {
      for (let breakpoint of Object.keys(result.breakpoints)) {
        if (result.breakpoints[breakpoint]) {
          if (breakpoint === '(min-width: 993px)') {
            this.element.nativeElement.classList.add('pc');
          } else if (breakpoint === '(max-width: 992px)') {
            this.element.nativeElement.classList.remove('pc');
          }
        }
      }
    });
  }
}
