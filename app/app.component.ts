import {Component, Output, OnInit} from '@angular/core';
import {SearchBox} from './components/search-box'
import {FileList} from './components/file-list'
import { pdfService } from './pdfs.service';
import { MDCRequest } from './mdc-request';
import {YearSelect} from './components/year-selector'

@Component({
    selector: 'my-app',
    directives: [YearSelect, SearchBox, FileList],
    template: 
    `
    	<year-select [files] = "files" (change)="selectedYear = $event"></year-select>
    	<search-box (update)="term = $event"></search-box>
		<file-list  [fileList]="files" [term]="term" [selectedYear]="selectedYear"></file-list>
    `,
    providers: [MDCRequest]
})


export class AppComponent implements OnInit{

	public files:any;
	//public year:string;

	constructor(private pdfService: pdfService, private mdcRequest: MDCRequest){}

	ngOnInit(){

		let opts:MDCRequest = {
			url: 'http://www.miamidade.gov/mayor/searchApp/searchHandler.ashx?',
			targetFolder: 'memos-and-reports',
			targetYear: '',
			targetMonth: ''
		}


		this.files = this.pdfService.getFiles(opts).getValue();

		//this.yearList = this.files;

	}

	//getYears(items:any){
//
	//	//console.log(items);
	//	return [...new Set(items.map(item => item.year))];
//
	//}

};
