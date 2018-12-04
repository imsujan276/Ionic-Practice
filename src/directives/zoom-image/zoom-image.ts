import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

/**
 * Generated class for the ZoomImageDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[zoom-image]' // Attribute selector
})
export class ZoomImageDirective {
  public el: HTMLImageElement;
  image;

  constructor(el: ElementRef, private renderer: Renderer) {
    this.el = el.nativeElement;
    this.image = this.el.src;
  }

  ngOnInit(){
    window.addEventListener('click', () => {
      console.log('click')
      
      // document.removeChild(document.querySelector('.zoom-image'))
    }, false);
  }
  
    @HostListener('mouseover') onMouseOver() {
      console.log('hover')
      this.createElement();
      setTimeout(()=>{
        this.styleCloseButton();
      })
    }
  
    @HostListener('mouseout') onMouseOut() {
      console.log('out')
      // let part = document.querySelector('.zoom-image');
      // this.renderer.setElementStyle(part, 'display', 'none');
    }

    createElement(){
      var elem = <HTMLDivElement>(document.createElement('DIV'));
      elem.className = "zoom-image";
      elem.style.height= '100%';
      elem.style.width= '100%';
      elem.style.background= 'rgba(102, 102, 102, 0.9)';
      elem.style.position = "absolute";
      elem.style.top ="0";
      elem.style.bottom  ="0";
      elem.style.left ="0";
      elem.style.right ="0";
      elem.style.zIndex ="99999";
      elem.style.display= "flex";
      elem.style.justifyContent = "center";
      elem.style.alignItems= "center";
      elem.innerHTML="<span class='zoom-image-close' onclick='test();'>Close </span><img src='"+this.image+"'>";
      this.el.parentElement.appendChild(elem)
    }

    test(){
      alert('test')
    }

    styleCloseButton(){
      let closeBtn = document.querySelector('.zoom-image-close');
      // closeBtn.innerHTML= "<span class='zoom-image-close' onclick='alert(asd)';>Close </span>";
      this.renderer.setElementStyle(closeBtn, 'display', 'block');
      this.renderer.setElementStyle(closeBtn, 'top', '0');
      this.renderer.setElementStyle(closeBtn, 'right', '0');
      this.renderer.setElementStyle(closeBtn, 'position', 'absolute');
      this.renderer.setElementStyle(closeBtn, 'color', 'ivory');
      this.renderer.setElementStyle(closeBtn, 'padding', '10px');
    }

}
