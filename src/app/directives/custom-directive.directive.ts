import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color ="green"
   }

}
