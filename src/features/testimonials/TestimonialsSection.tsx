import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";
import { Title } from "../../shared/ui/typography";
import { TestimonialCard } from "./components/TestimonialCard";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Coffee Enthusiast",
    content: "The best artisanal coffee I've had in Kyiv. The micro-roasting process is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Kovalenko",
    role: "Local Resident",
    content: "A truly soulful atmosphere. My favorite spot to start the morning.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Digital Nomad",
    content: "Superb service and even better coffee. The vibes are just perfect.",
    rating: 5,
  },
  {
    id: 4,
    name: "Olena Petrova",
    role: "Designer",
    content: "Love the attention to detail. A must-visit for any coffee lover.",
    rating: 5,
  },
  {
    id: 5,
    name: "Viktor Smirnov",
    role: "Entrepreneur",
    content: "Consistency is key, and they deliver perfection every single time.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sophie Chen",
    role: "Traveler",
    content: "A hidden gem in the city. Best flat white I've had in Europe.",
    rating: 5,
  },
];

export const TestimonialsSection: FC = () => {
  return (
    <Section id="testimonials" className="bg-transparent">
      <Container>
        <div className="text-center mb-20">
          <Title level={2} className="mb-4">
            Guest Experiences
          </Title>
          <div className="w-24 h-1 bg-coffee-medium/30 mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ 
            clickable: true,
          }}
          className="pb-20"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};
