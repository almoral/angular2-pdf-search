import {Component} from '@angular/core';
import {SearchBox} from './components/search-box'
import {FileList} from './components/file-list'


@Component({
    selector: 'my-app',
    directives: [SearchBox, FileList],
    template: `
    	<search-box (update)="term = $event"></search-box>
		<file-list [term]="term"></file-list>
    `
})


export class AppComponent{

	update($event){
		console.log($event);
	}
};
