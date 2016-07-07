import { Component } from '@angular/core';
import { pdfService } from './pdfs.service';


@Component({
    selector: 'my-app',
    template: `
    	<ul>
    		<!-- <li *ngFor="let res of files.results"> -->
    		<li>
    			<h3><a href="{{filePath}}">{{label}}</a></h3>
    			<p>{{fileSize}}</p>
    		</li>
    	</ul>
    `,
    providers: [pdfService]
})


export class AppComponent {

	files: Object;

	constructor(pdfService: pdfService){

		//this.result = {files:[]};
		//pdfService.getPdfs().subscribe(res => this.result = res);
		console.log("****** Service: ", pdfService.getFiles());

		this.files = pdfService.getFiles();

		console.log(this.files);
	}

	//filePath = "http://www.google.com";
	//label = "Test label for file";
	//fileSize = "3.3MB";
};
