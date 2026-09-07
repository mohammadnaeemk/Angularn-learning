import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NavbarActionItemModel, NavbarItemModel, NavValueTypes } from './header.model';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatTooltip, MatIconModule],
  templateUrl: './header.html',
})
export class Header {
  protected readonly rating = signal(4.5);
  protected readonly navbarItems = signal<NavbarItemModel[]>([
    { title: 'خانه', value: NavValueTypes.home },
    // { title: 'وبلاگ', value: NavValueTypes.blog },
    { title: 'درباره‌ما', value: NavValueTypes.aboutUs },
    { title: 'ارتباط با ما', value: NavValueTypes.contactUs },
    // { title: 'قوانین و مقررات', value: NavValueTypes.rules },
  ]);
  protected readonly navbarActionItems = signal<NavbarActionItemModel[]>([
    { tooltipText: 'جستجوی غذا ها', icon: 'is-search-normal', value: 'search' },
    // { tooltipText: 'سبد خرید', icon: 'is-shopping-cart', value: 'shoppingCart' },
    { tooltipText: 'پروفایل', icon: 'is-user', value: 'profile' },
  ]);
  protected navItemClicked(itemValue: NavValueTypes):void {
    switch (itemValue) {
      case NavValueTypes.home:
        console.log('خانه');
        break;
      case NavValueTypes.blog:
        console.log('مقاله ها');

        break;
      case NavValueTypes.aboutUs:
        console.log('درباره ما');

        break;
      case NavValueTypes.contactUs:
        console.log('ارتباط باما');

        break;
      case NavValueTypes.rules:
        console.log('قوانین و مقررات');
        break;
      default:
        break;
    }
  }
}
