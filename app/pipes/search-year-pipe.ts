import {Pipe} from '@angular/core'

@Pipe({
	name: 'searchByYear'
})

export class SearchByYearPipe{

	//tmp = [];

	transform(value: any, selectedYear: string){


		if(value){
		
			console.log("Selected year: ", selectedYear);

			return value.filter((item:any) => item.label !== null && item.label.indexOf(selectedYear) > -1);
		}
	}
}