import {Component, Input} from '@angular/core'
import {SearchPipe} from '../pipes/search-pipe'
//import { Pdf } from '../pdf';
import { pdfService } from '../pdfs.service';
import { MDCRequest } from '../mdc-request';

@Component({
	selector: 'file-list',
	pipes: [SearchPipe],
	template: `
	    	<ul>
    		<li *ngFor="let file of (files | async | search:term)" term ="term"> 
    			<h4><a href="{{file.filePath}}">{{file.label}}</a></h4>
    			<p>{{file.fileSize}}</p>
    		</li>
    	</ul>`,
    providers: [pdfService, MDCRequest]
}) 

export class FileList{

	@Input() term:string;

	files: any;

	constructor(private pdfService: pdfService, private mdcRequest: MDCRequest){
		
	}

	getFiles(mdcRequest: MDCRequest) {

		//console.log(this.pdfService.getFiles(mdcRequest));

		this.files = this.pdfService.getFiles(mdcRequest)//.subscribe(files => this.files = files);
	};

	ngOnInit(){

		let opts:MDCRequest = {
			url: 'http://www.miamidade.gov/mayor/searchApp/searchHandler.ashx?',
			targetFolder: 'memos-and-reports',
			targetYear: '',
			targetMonth: ''
		}

		this.getFiles(opts);

	}

}

