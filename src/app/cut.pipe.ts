import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(title: string,limit:number): string {
    return title.split('').slice(0,limit).join('');
  }

}
