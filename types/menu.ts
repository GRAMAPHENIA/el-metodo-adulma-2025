export interface MenuItemProps {
  title: string;
  subItems: any;
  label: string;
  links: {
    title: string;
    href: string;
    description: string;
  }[];
}
