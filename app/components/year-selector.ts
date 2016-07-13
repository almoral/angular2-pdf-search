import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UniqueValuesPipe } from '../pipes/uniques-pipe'

@Component({
	selector: 'year-select',
	pipes: [UniqueValuesPipe],
	template: 
	`
		<select #selectedYear (change)="onChange(selectedYear.value)" class="year-select">
		<option value=''>Please Select a Year</option>
		<option *ngFor="let item of (files | async | uniques:item:'year')" value="{{item}}">{{item}}</option>
		</select>
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