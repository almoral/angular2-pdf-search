import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UniqueValuesPipe } from '../pipes/unique-values-pipe'

@Component({
	selector: 'year-select',
	pipes: [UniqueValuesPipe],
	template: 
	`
		<div class="mdl-selectfield">
		<select #selectedYear (change)="onChange(selectedYear.value)" class="year-select">
		<option value=''>Please Select a Year</option>
		<option *ngFor="let item of (files | async | uniqueValues:item)" value="{{item}}">{{item}}</option>
		</select>
		</div>
	`
})

export class YearSelect{
	@Input() files = "";
	@Output() select = new EventEmitter();

	onChange(selectedValue: string){
		//console.log('selected value: ', selectedValue);
		this.select.emit(selectedValue);
	}

	//ngOnInit(){
	//	this.select.emit(" ");
	//}


}