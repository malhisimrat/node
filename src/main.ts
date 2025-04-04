import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


export function getBaseUrl(){
  return "https://sbackend.cc3.ksesystem.com/api"
}

export function getBaseUrlImage(){
  return "https://sbackend.cc3.ksesystem.com/"
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'BASE_URL_IMAGE', useFactory: getBaseUrlImage, deps: [] },
]

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
