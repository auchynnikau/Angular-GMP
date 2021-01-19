import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

const durationFormat = 'h[h] m[min]';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(length: number, format: string = durationFormat): string {
    return moment.duration(length, 'minutes').format(format);
  }
}
