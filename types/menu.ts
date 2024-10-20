export interface MenuItemProps {
  title: ReactNode;
  subItems: any;
  label: string;
  links: {
    title: string;
    href: string;
    description: string;
  }[];
}
