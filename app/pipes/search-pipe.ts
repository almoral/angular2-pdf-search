import {Pipe} from '@angular/core'

@Pipe({
	name: 'search'
})

export class SearchPipe{

	//tmp = [];

	transform(value: any, term: string){
	
		//this.tmp.length = 0;

		if(value){
		
			console.log(term);

			return value.filter((item:any) => item.label !== null && item.label.indexOf(term) > -1);

			//this.tmp.push(...arr);

			//return this.tmp;
		}
	}
}