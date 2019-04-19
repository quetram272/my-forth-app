import { Directive, RendererV2 ,OnInit,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
constructor(private elRef: ElementRef, private renderer:RendererV2 ) { }

  ngOnInit (){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseenter') mouseover (eventDate: Event) {
this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);

  }

@HostListener('mouseleave') mouseleave (eventDate: Event) {
this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
}
}
