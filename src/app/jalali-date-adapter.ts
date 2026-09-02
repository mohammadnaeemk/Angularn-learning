import { Injectable } from '@angular/core';
import { DateFnsAdapter } from '@angular/material-date-fns-adapter';
import * as jalali from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';

@Injectable()
export class JalaliDateAdapter extends DateFnsAdapter {
  // — خواندن اجزای تاریخ بهصورت شمسی —
  override getYear(date: Date): number {
    return jalali.getYear(date);
  }

  override getMonth(date: Date): number {
    return jalali.getMonth(date);
  }

  override getDate(date: Date): number {
    return jalali.getDate(date);
  }

  override getDayOfWeek(date: Date): number {
    return jalali.getDay(date);
  }

  override getNumDaysInMonth(date: Date): number {
    return jalali.getDaysInMonth(date);
  }

  // — ساخت تاریخ شمسی: اول سال، بعد ماه، بعد روز را ست میکنیم —
  override createDate(year: number, month: number, date: number): Date {
    const result = jalali.setDate(
      jalali.setMonth(jalali.setYear(new Date(2000, 0, 1), year), month),
      date,
    );
    result.setHours(0, 0, 0, 0);
    return result;
  }

  // — جلو/عقب بردن تاریخ —
  override addCalendarYears(date: Date, years: number): Date {
    return jalali.addYears(date, years);
  }

  override addCalendarMonths(date: Date, months: number): Date {
    return jalali.addMonths(date, months);
  }

  override addCalendarDays(date: Date, days: number): Date {
    return jalali.addDays(date, days);
  }

  // — نمایش و خواندن متن تاریخ با لوکال فارسی —
  override format(date: Date, displayFormat: string): string {
    if (!this.isValid(date)) {
      throw Error('JalaliDateAdapter: Cannot format invalid date.');
    }
    return jalali.format(date, displayFormat, { locale: faIR });
  }

  override parse(value: unknown, parseFormat: string | string[]): Date | null {
    const formats = Array.isArray(parseFormat) ? parseFormat : [parseFormat];
    for (const format of formats) {
      const parsed = jalali.parse(String(value), format, new Date(), { locale: faIR });
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }
    return null;
  }

  // — اسم ماهها (فروردین...) و روزها (شنبه...) —
  override getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    const pattern = { long: 'LLLL', short: 'LLL', narrow: 'LLLLL' }[style];
    return Array.from({ length: 12 }, (_, i) =>
      jalali.format(jalali.setMonth(new Date(2017, 0, 1), i), pattern, { locale: faIR }),
    );
  }

  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    const pattern = { long: 'EEEE', short: 'EEE', narrow: 'EEEEE' }[style];
    return Array.from({ length: 7 }, (_, i) =>
      jalali.format(new Date(2017, 0, i + 1), pattern, { locale: faIR }),
    );
  }

  override getYearName(date: Date): string {
    return jalali.format(date, 'y', { locale: faIR });
  }
}
