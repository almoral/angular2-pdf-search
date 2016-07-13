import {Pipe} from '@angular/core'

@Pipe({
	name: 'searchByYear'
})

export class SearchByYearPipe{

	transform(value: any, selectedYear:any){


		if(value && selectedYear){
		
			console.log("Selected year: ", selectedYear.path[0].value);

			return value.filter((item:any) => item.year !== null && item.year === selectedYear.path[0].value);
		}
	}
}
