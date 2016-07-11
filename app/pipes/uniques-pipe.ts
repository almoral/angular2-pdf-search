import {Pipe} from '@angular/core'

@Pipe({
	name: 'uniques'
})

export class UniqueValuesPipe{

	  transform(items: any[]): any {

	  	if(items !== null && items !== undefined){
	  	let tempArray = [];
	  	let unique = {};

	  		for(var i in items){

        		if(typeof(unique[items[i].year]) == "undefined"){
        			tempArray.push(items[i].year)
        		}

        		unique[items[i].year] = 0;
	  		}


	  	return tempArray;
	  	//return items.filter(item => item.year.indexOf(item[0]) !== -1);
	  }
    };
}