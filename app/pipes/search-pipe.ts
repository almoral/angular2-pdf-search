import {Pipe} from '@angular/core'

@Pipe({
	name: 'search'
})

export class SearchPipe{


	transform(value: any, term:string, selectedYear:any, selectedMonth:any){


		if(value){
			
			if(!selectedYear && !selectedMonth){
			
				return value.filter((item:any) => item.label !== null && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);

			} 
		
			if(!selectedYear && !selectedMonth) {

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.path[0].value);
			}

		
			if(selectedYear && !selectedMonth){

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.path[0].value && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);

			}

			if(selectedYear && selectedMonth){

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.path[0].value && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1 && item.monthLabel == selectedMonth.path[0].value);

			}

			if(!selectedYear && selectedMonth){

				return value.filter((item:any) => item.year !== null && item.monthLabel == selectedMonth.path[0].value);

			}

			if(selectedYear && selectedMonth){

				return value.filter((item:any) => item.year !== null && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1 && item.monthLabel == selectedMonth.path[0].value);

			}

		}

	}
}