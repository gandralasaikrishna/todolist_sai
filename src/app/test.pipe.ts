import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(p: any, params1:string): string {

    if(p.gender=="f"){
      return `Hello miss ${p.Name} and nick name ${p.nickname} ${params1}`
      
    }
    else{
      return `Hello Mr ${p.Name} and nick name ${p.nickname} ${params1}`
    }
  }

}



@Pipe({name: 'removeHtmlTags'})
export class RemoveHtmlTagsPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/<\/?[^>]+(>|$)/g, '');
  }

}


