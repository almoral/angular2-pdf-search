//import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
//import 'rxjs/Rx';
import { FILES } from '/app/results';

@Injectable()

export class pdfService {

	//http:Http;
	//constructor(http:Http){
	//	console.log('Creating PDF Service.');
	//	this.http = http;
	//};


	getFiles(){

		//return this.http.get('http://www.miamidade.gov/mayor/searchApp/searchHandler.ashx?directory=memos-and-reports').map((res: Response) => res.json());

		//return this.http.get('./app/results.js').map((res: Response) => res.json());
		console.log("Files: ", FILES);
		return FILES;

	}
}