import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[courseHighlight]',
})
export class CourseHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {
    element.nativeElement.style.border = 'none';
  }

  @Input('courseHighlight') highlightColor: string;

  ngOnInit() {
    if (this.highlightColor) {
      this.element.nativeElement.style.border = `0.1rem solid ${this.highlightColor}`;
    }
  }
}
