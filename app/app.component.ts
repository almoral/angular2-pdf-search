import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    	<h3><a href="{{filePath}}">{{label}}</a></h3>
    	<p>{{fileSize}}</p>
    `
})
export class AppComponent {

	filePath = "http://www.google.com",
	label = "Test label for file",
	fileSize = "3.3MB"
}
