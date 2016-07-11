import {Component, Input} from '@angular/core'
import {SearchPipe} from '../pipes/search-pipe'


@Component({
	selector: 'file-list',
	pipes: [SearchPipe],
	template: `
	    	<ol>
    		<li *ngFor="let file of (fileList | async | search:term)"> 
    			<p><a href="{{file.filePath}}">{{file.label}}</a> <span>{{file.fileSize}}</span></p>
    		</li>
    	</ol>`
}) 

export class FileList{

	@Input() term:string;

	@Input() fileList: any;

	constructor(){
		
	}


}

