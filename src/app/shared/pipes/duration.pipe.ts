import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  moment: any = moment;

  transform(duration: number, format: string = 'hh h mm min'): string {
    return moment(duration).format(format);
  }
}
