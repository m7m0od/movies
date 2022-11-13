import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(desc:string,limit:number): any {
    return desc.substring(0,limit);
  }

}
