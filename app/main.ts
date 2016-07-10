import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import {HTTP_PROVIDERS} from '@angular/http'

import {pdfService} from './pdfs.service'


bootstrap(AppComponent, [HTTP_PROVIDERS, pdfService]);
