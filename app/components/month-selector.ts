import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
	selector: 'month-select',
	template: 
	`
		<div class="mdl-selectfield">
		<select #selectedMonth (change)="onChange(selectedMonth.value)" class="month-select">
		<option value=''>Please Select a Month</option>
		<option *ngFor="let month of months" value="{{month}}">{{month}}</option>
		</select>
		</div>
			`
})

export class MonthSelect{
	@Input() months = "";
	@Output() selectMonth = new EventEmitter();


	onChange(selectedValue: string){
		console.log('selected value: ', selectedValue);
		this.selectMonth.emit(selectedValue);
	}

	//ngOnInit(){
	//	this.selectMonth.emit(" ");
	//}

}