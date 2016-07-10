import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
	selector: 'year-select',
	template: `<div class="year-select-container">
					<select #select (select)="selectYear.emit(select.value)" class="year-select">
					<option value="{{file.year}}">{{file.year}}</option>
					</select>`
})

export class YearSelect{
	@Input() select = "";
	@Output() selectYear = new EventEmitter();

}