
export type PageKey = 
  | 'home' 
  | 'mission' 
  | 'charter' 
  | 'structure' 
  | 'board' 
  | 'announcement' 
  | 'news' 
  | 'industry' 
  | 'seminar' 
  | 'events' 
  | 'join' 
  | 'login';

export interface PageData {
  title: string;
  content: React.ReactNode;
  breadcrumb?: string;
}

export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  type: 'association' | 'industry';
}
