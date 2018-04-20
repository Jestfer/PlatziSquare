import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: 'a[count-clicks]'
})
export class CountClicksDirective {
  clickN = 0
  @HostListener('click', ['$event.target']) onclick(btn){
    console.log('a', btn, "Number of clicks:", this.clickN++);
  }
}
