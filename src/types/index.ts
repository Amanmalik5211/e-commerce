export interface BrandCardType {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  discount?: number;
  tags?: string[];
  isMobile?: boolean;
}
  
  export interface SidebarItem {
    name: string;
    count?: number;
    icon?: string;
  }
  
  export interface SidebarProps {
    title: string;
    items: SidebarItem[];
    variant: 'category' | 'brand';
  }