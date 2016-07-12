import {Pipe} from '@angular/core'

@Pipe({
	name: 'searchByYear'
})

export class SearchByYearPipe{

	//tmp = [];

	transform(value: any, selectedYear: string){


		if(value){
		
			//console.log("Selected year: ", selectedYear);

			return value.filter((item:any) => item.year !== null && item.year.indexOf(selectedYear) > -1);
		}
	}
}
