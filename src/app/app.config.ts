import { ApplicationConfig, LOCALE_ID, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import localeFa from '@angular/common/locales/fa';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => {
      registerLocaleData(localeFa, 'fa');
    }),
    { provide: LOCALE_ID, useValue: 'fa' },
    provideRouter(routes), provideClientHydration()
  ]
};
