import React from 'react';
import { Badge } from '@/components/ui/badge';

interface BadgeProps {
  className?: string;
  variant?: string;
  [key: string]: any; // Adjust this as per the actual Badge component's props
}
import { cn } from '@/lib/utils';

export type ResponseCategory = 
  | 'agreement'
  | 'counterpoint'
  | 'question'
  | 'expansion'
  | 'resource'
  | 'meta'
  | 'other';

interface CategoryBadgeProps extends Omit<BadgeProps, 'children'> {
  category: ResponseCategory;
}

const getCategoryDetails = (category: ResponseCategory) => {
  switch (category) {
    case 'agreement':
      return { label: 'Agreement', color: 'bg-green-100 text-green-800 hover:bg-green-200' };
    case 'counterpoint':
      return { label: 'Counterpoint', color: 'bg-amber-100 text-amber-800 hover:bg-amber-200' };
    case 'question':
      return { label: 'Question', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' };
    case 'expansion':
      return { label: 'Expansion', color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' };
    case 'resource':
      return { label: 'Resource', color: 'bg-teal-100 text-teal-800 hover:bg-teal-200' };
    case 'meta':
      return { label: 'Meta', color: 'bg-gray-100 text-gray-800 hover:bg-gray-200' };
    default:
      return { label: 'Other', color: 'bg-gray-100 text-gray-800 hover:bg-gray-200' };
  }
};

const CategoryBadge = ({ category, className, ...props }: CategoryBadgeProps) => {
  const { label, color } = getCategoryDetails(category);
  
  return (
    <Badge 
      variant="outline" 
      className={cn(color, 'font-medium transition-colors', className)} 
      {...props}
    >
      {label}
    </Badge>
  );
};

export default CategoryBadge;