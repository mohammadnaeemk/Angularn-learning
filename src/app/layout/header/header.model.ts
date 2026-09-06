export interface NavbarItemModel {
  title: string;
  value: NavValueTypes;
}
export interface NavbarActionItemModel {
  tooltipText: string;
  icon: string;
  value: string;
}
export enum NavValueTypes {
  home = 'home',
  blog = 'blog',
  aboutUs = 'aboutUs',
  contactUs = 'contactUs',
  rules = 'rules',
}
