import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UniqueValuesPipe } from '../pipes/uniques-pipe'

@Component({
	selector: 'month-select',
	pipes: [UniqueValuesPipe],
	template: 
	`
		<select #selectedMonth (change)="onChange(selectedMonth.value)" 	class="month-select">
		<option value=''>Please Select a Month</option>
		<option *ngFor="let item of (files | async | uniques:item:'month')" 	value="{{item}}">{{item}}</option>
		</select>
			`
})

export class MonthSelect{
	@Input() files = "";
	@Output() select = new EventEmitter();


	onChange(selectedValue: string){
		console.log('selected value: ', selectedValue);
		this.select.emit(selectedValue);
	}

	ngOnInit(){
		this.select.emit(" ");
	}

}