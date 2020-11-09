import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

const DAYS_AGO = 14;

@Directive({
  selector: '[courseHighlight]',
})
export class CourseHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private element: ElementRef) {
    this.renderer.setStyle(element.nativeElement, 'border', 'none');
  }

  @Input() highlight: Date;

  ngOnInit() {
    const highlightColor = this.getCourseHighlight(this.highlight);

    if (highlightColor) {
      const borderStyle = `0.1rem solid ${highlightColor}`;
      this.renderer.setStyle(this.element.nativeElement, 'border', borderStyle);
    }
  }

  getCourseHighlight(creationDate: Date): string {
    const currentDate = new Date();
    const pastDateTermValue = new Date().setDate(creationDate.getDate() - DAYS_AGO);
    const pastDateTerm = new Date(pastDateTermValue);

    if (creationDate < currentDate && creationDate >= pastDateTerm) {
      return 'green';
    }
    if (creationDate > currentDate) {
      return 'blue';
    }

    return '';
  }
}
