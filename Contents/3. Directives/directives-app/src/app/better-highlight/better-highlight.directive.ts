import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() primaryBG = 'transparent';
  @Input() secondaryBG = 'blue';
  @HostBinding('style.backgroundColor') bgColor = 'transparent';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.primaryBG;
  }

  @HostListener('mouseenter') mouseover(eventData: Event): void {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.secondaryBG;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.bgColor = this.primaryBG;
  }
}
