import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidden'
})
export class HiddenPipe implements PipeTransform {

  transform(value: string, hidde: boolean): string {

    let text = '';
    if (hidde) {
      for (let i = 0; i < value.length; i++) {
        text += '*'

      }
    } else {

      text = value;

    }
    return text;
  }

}
