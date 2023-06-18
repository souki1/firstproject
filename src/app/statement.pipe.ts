import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statement'
})
export class StatementPipe implements PipeTransform {
  // pipevalue:string=""
  num:number=82
  transform(value:any, ...args: unknown[]): any {
    
    return value*this.num;
  }

}
