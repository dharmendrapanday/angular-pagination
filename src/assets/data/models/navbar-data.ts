export interface NavbarItem {
  id: number;
  label: string;
  route: string;
  icon: string; 
}
export const navbarData:NavbarItem[] = [
  { id: 1, label: 'Home', route: '/home', icon: 'home' },
  { id: 2, label: 'About', route: '/about', icon: 'info' },
  { id: 3, label: 'Contact Us', route: '/contact', icon: 'contacts' },
];

