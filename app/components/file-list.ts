import {Component, Input} from '@angular/core'
import {SearchPipe} from '../pipes/search-pipe'
import {SearchByYearPipe} from '../pipes/search-year-pipe'
import {FixUrl} from '../pipes/fix-url-pipe'

@Component({
	selector: 'file-list',
	pipes: [SearchPipe, SearchByYearPipe, FixUrl],
	template: `
	    	<ol>
    		<li *ngFor="let file of (fileList | async | search:term:selectedYear)"> 
    			<p><a href="{{file.filePath | fixUrl}}">{{file.label}}</a> <span>{{file.fileSize}}</span></p>
    		</li>
    	</ol>`
}) 

export class FileList{

	@Input() term:string;

	@Input() selectedYear: string;

	@Input() fileList: any;

	constructor(){
		
	}


}

