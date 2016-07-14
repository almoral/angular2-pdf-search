import { Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
	selector: 'search-box',
	template: `
				<div class="mdl-inputfield">
				<input class="search-box" #input type="text" (input)="update.emit(input.value)" pattern="\S"/>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Keyword</label>
				</div>
			`
})


export class SearchBox{
	@Input() input = " ";	
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit(' ')
	}
}