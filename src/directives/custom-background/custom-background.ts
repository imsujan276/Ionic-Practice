import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

/**
 * Generated class for the CustomBackgroundDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[custom-background]' // Attribute selector
})
export class CustomBackgroundDirective {

  @Input('bg') code;


  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello CustomBackgroundDirective Directive');
  }

  ngOnInit(){
    if(this.code.color){
      this.setBackgroundColor(this.code.color);
    }
    if(this.code.rgba){
      this.setBackgroundRgba(this.code.rgba);
    }
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    let rgba = 'rgba(155,100,255,0.6)'
    // let color = this.code.hover ? this.code.hover : rgba;
    // this.setBackgroundColor(color);
    this.renderer.setElementStyle(this.element.nativeElement, 'background', rgba);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    if(this.code.color){
      this.setBackgroundColor(this.code.color);
    }
    if(this.code.rgba){
      this.setBackgroundRgba(this.code.rgba);
    }
  }

  setBackgroundColor(colorCode: string){
    this.renderer.setElementStyle(this.element.nativeElement, 'background', '#'+colorCode);
  }

  setBackgroundRgba(rgba: string){
    this.renderer.setElementStyle(this.element.nativeElement, 'background', rgba);
  }
}
