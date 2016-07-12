import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UniqueValuesPipe } from '../pipes/uniques-pipe'

@Component({
	selector: 'year-select',
	pipes: [UniqueValuesPipe],
	template: `
					<select #selectedYear (change)="onChange($event.target.value)" class="year-select">
					<option value=''>Please Select a Year</option>
					<option *ngFor="let item of (files | async | uniques:item)" value="{{item}}">{{item}}</option>
					</select>`
})

export class YearSelect{
	@Input() files = "";
	@Output() change = new EventEmitter();


	onChange(selectedValue: string){
		console.log('selected value: ', selectedValue);
		this.change.emit(selectedValue);
	}

	ngOnInit(){
		this.change.emit("2011");
	}

}