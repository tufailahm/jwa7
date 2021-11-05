import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumber'
})
export class MobileNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (undefined !== value && value.length === 10){
      //(651) 417 1511
        return '(' + value.substring(0,3) + ') ' +
         value.substring(3,6) + ' ' + value.substring(6);
      }
      return '';
  }

}
