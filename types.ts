
export interface Job {
  id: number;
  title: Record<string, string>;
  company: string;
  location: string;
  salary: string;
  type: Record<string, string>;
  category: string;
  description: Record<string, string>;
}

export interface Profile {
  id: number;
  name: string;
  skill: Record<string, string>;
  rating: number;
  location: string;
  imageUrl: string;
}

export interface FAQItem {
  id: number;
  question: Record<string, string>;
  answer: Record<string, string>;
}
