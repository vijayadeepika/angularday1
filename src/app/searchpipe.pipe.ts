import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(mdata,searchText): any {
  let condition=y=>y.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
  if (!searchText) {
    return mdata
  } 
  else 
  {
    return mdata.filter(condition)
  }

  }
  

}
