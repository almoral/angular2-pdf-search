import { Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
	selector: 'search-box',
	template: `
				<input class="search-box" #input type="text" (input)="update.emit(input.value)"/>
			`
})


export class SearchBox{
	@Input() input = " ";	
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit(' ')
	}
}