import { Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
	selector: 'search-box',
	template: `<div>
				<input #input type="text" (input)="update.emit(input.value)"/>
				</div>`
})

export class SearchBox{
	@Input() input = " ";	
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit(' ')
	}
}