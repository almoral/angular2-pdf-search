import {Pipe} from '@angular/core'

@Pipe({
	name: 'search'
})

export class SearchPipe{

	//tmp = [];

	transform(value: any, term="", selectedYear:any){

		if(value){
			
			if(term.length > 0 && !selectedYear){
			
				return value.filter((item:any) => item.label !== null && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);

			} 
		
			if(selectedYear.target.value !== '' && term.length == 0) {
			
				return value.filter((item:any) => item.year !== null && item.year == selectedYear.path[0].value);
			}
		
			if(selectedYear.target.value !== '' && term.length > 0){

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.path[0].value && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);

			}

		}

	}
}