import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appTextFormatChange]"
})
export class TextFormatChangeDirective {
  // by adding tag, we are 'injecting'
  constructor(private tag: ElementRef) {
    // the html tag will be passed as DOM element
    let node = tag.nativeElement;
    node.style.fontStyle = "normal";
    node.style.backgroundColor = "orange";
  }
}
