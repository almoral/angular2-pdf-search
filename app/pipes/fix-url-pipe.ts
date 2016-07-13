import {Pipe} from '@angular/core'

@Pipe({
	name: 'fixUrl'
})

export class FixUrl{

	  transform(value:string){

     //Remove inetpub/WWW/

     //let correctUrl: string = "";

     let domain:string = value.substring(0, value.indexOf('inetpub'));

     let realPath: string = value.substring(value.indexOf('WWW/') + 4, value.length);

     return domain + realPath;
	  
    };
  
}