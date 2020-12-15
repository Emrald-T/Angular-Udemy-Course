import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavMenuToggle]'
})
export class NavMenuToggleDirective {
  @HostBinding('class.in') isMenuOpen = false;
  @Input() set toggleMenuOpen(condition: boolean) {
    if (condition) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
    }
  }

  constructor(private elemRef: ElementRef) { }

  @HostListener('document:scroll', ['$event']) docScrolled(event: Event): void {
    this.isMenuOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isMenuOpen : false;
  }

}
