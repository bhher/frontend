export interface NavItem {
  label: string;
  href: string;
}

export interface UseCase {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tagColor: string;
}

export interface Product {
  id: number;
  series: string;
  name: string;
  desc: string;
  image: string;
  tags?: string[];
}

export interface SocialPost {
  id: number;
  platform: 'facebook' | 'instagram' | 'youtube' | 'linkedin';
  image: string;
  content: string;
  date: string;
  author: string;
}