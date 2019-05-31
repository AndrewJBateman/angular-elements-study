import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// disable Angular automatic change detection/rerendering (ngZone)
platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop'})
  .catch(err => console.error(err));
