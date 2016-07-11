import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UniqueValuesPipe } from '../pipes/uniques-pipe'

@Component({
	selector: 'year-select',
	pipes: [UniqueValuesPipe],
	template: `
					<select #select (select)="selectYear.emit(select.value)" class="year-select">
					<option value="">Select a year</option>
					<option *ngFor="let item of (files | async | uniques:item)" value="{{item}}">{{item}}</option>
					</select>`
})

export class YearSelect{
	@Input() files = "";
	@Output() selectYear = new EventEmitter();


	constructor(){}


}