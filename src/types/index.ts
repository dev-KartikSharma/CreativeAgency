// Global type definitions for Brutalist Portfolio

export interface IconProps {
  className?: string;
  size?: number;
}

export type WorkCategory = 'brand' | 'stories';

export interface WorkItem {
  id: string;
  category: WorkCategory;
  tag: string;
  title: string;
  client?: string;
  description?: string;
  year?: string;
  image?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tags: string[];
  description: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface NavigationProps {
  onOpenContact: () => void;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CategorySwitcherProps {
  activeCategory: WorkCategory;
  onSelectCategory: (category: WorkCategory) => void;
}

export interface SectionProps {
  id?: string;
  className?: string;
}
