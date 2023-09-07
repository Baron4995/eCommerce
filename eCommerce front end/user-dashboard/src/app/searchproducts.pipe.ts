import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproducts'
})
export class SearchproductsPipe implements PipeTransform {

  transform(obj: any, key:any): any {
    console.log(obj);
    let result = obj.filter((p:any)=>p.title.toUpperCase().startsWith(key.toUpperCase()));
    // if(result.length == 0){
    //   return obj;
    // }else{
    //   return result;
    // }
    return result;
  }

}
