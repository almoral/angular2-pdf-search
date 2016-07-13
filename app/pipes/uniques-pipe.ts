import {Pipe} from '@angular/core'

@Pipe({
	name: 'uniques'
})

export class UniqueValuesPipe{

	  transform(items: any[] = []){

     //if(items !== null && items !== undefined){
	  	let tempArray:string[] = [];
	  	let unique = {};
      
      //let params = sortParam;

     //console.log("Sort parameters: ", params);

  		for(var i in items){

    		//if(sortParam == 'year'){
          if(typeof(unique[items[i].year]) == "undefined"){
    			
    			  if(items[i].year !== null && items[i].year.length > 0)
    				  tempArray.push(items[i].year)
    		  }

    		  unique[items[i].year] = 0;
        //}
        //if(sortParam == 'month'){
        //   if(typeof(unique[items[i].month]) == "undefined"){
        //  
        //    if(items[i].month !== null && items[i].month.length > 0)
        //    tempArray.push(items[i].month)
        //  }
        //  unique[items[i].month] = 0;
        //}
  		}

	  	return tempArray;
	  
    };
  //}
}