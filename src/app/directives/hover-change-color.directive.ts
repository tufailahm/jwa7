import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverChangeColor]'
})
export class HoverChangeColorDirective {

  @HostBinding("style.background-color") backgroundColor: string;

  @HostListener('mouseover') onHover(){
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') onLeave(){
    this.backgroundColor = 'inherit';
  }


  constructor() { }

}
