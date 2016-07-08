import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
//import 'rxjs/Rx';
import { Pdf } from './pdf';
//import { PDFS } from './results';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import { MDCRequest } from './mdc-request'

@Injectable()

export class pdfService {


	constructor(private http:Http){};

	getFiles(options: MDCRequest){


		let opts = options;
		let url: string = opts.url;
		let target: string = opts.targetFolder == '' ? opts.targetFolder : 'folder=' + opts.targetFolder;
		let year: string = opts.targetYear;
		let month: string = opts.targetMonth;


		//return this.http.get(url + target + '&year=' + year + '&month=' + month).map((res: Response) => res.json());

		return this.http.get('./app/results.js').map((res: Response) => res.json());
		//console.log("Files: ", PDFS);
		//return Promise.resolve(PDFS).catch(this.handleError);

	}

	private handleError (error: any){
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}