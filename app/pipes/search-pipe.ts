import {Pipe} from '@angular/core'

@Pipe({
	name: 'search'
})

export class SearchPipe{

	//tmp = [];

	transform(value: any, term: string){


		if(value){
		
			console.log(term);

			return value.filter((item:any) => item.label !== null && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
		}
	}
}