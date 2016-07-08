import {Pipe} from '@angular/core'

@Pipe({
	name: 'search'
})

export class SearchPipe{

	tmp = [];

	transform(value: any, [term]){
	
		this.tmp.length = 0;

		if(value){
		
			let arr = value.filter((item:any) => item.label !== null && item.label.indexOf(term) > -1);

			this.tmp.push(...arr);
			return this.tmp;
		}
	}
}