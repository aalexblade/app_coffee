import React, { FC } from 'react';
import { Star } from 'lucide-react';
import { Card } from '../../../shared/ui/card';
import { Title, Text } from '../../../shared/ui/typography';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full flex flex-col items-center text-center p-8 bg-cream border-coffee-light/10 hover:border-coffee-light/40 transition-all duration-300">
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-coffee-medium text-coffee-medium" />
        ))}
      </div>
      
      <Text className="text-lg text-coffee-dark italic leading-relaxed mb-8 font-serif opacity-90">
        "{testimonial.content}"
      </Text>
      
      <div className="mt-auto">
        <Title level={4} as="h4" className="text-sm font-bold text-coffee-dark uppercase tracking-widest">
          {testimonial.name}
        </Title>
        <Text className="text-coffee-dark/50 text-xs mt-1">
          {testimonial.role}
        </Text>
      </div>
    </Card>
  );
};
