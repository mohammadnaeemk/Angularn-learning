import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import localeFa from '@angular/common/locales/fa';
import { provideDateFnsAdapter } from '@angular/material-date-fns-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { faIR } from 'date-fns-jalali/locale';

import { JalaliDateAdapter } from './jalali-date-adapter';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => {
      registerLocaleData(localeFa, 'fa');
    }),
    { provide: LOCALE_ID, useValue: 'fa' },
    provideRouter(routes),
    provideClientHydration(),
    provideDateFnsAdapter(),
    { provide: DateAdapter, useClass: JalaliDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: faIR },
  ],
};
