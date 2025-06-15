'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/styles/lib/utils';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    dragFree: true
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div 
      className="relative w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="overflow-hidden rounded-xl shadow-2xl shadow-black/20 dark:shadow-purple-900/20"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative aspect-video w-full">
                <Image
                  src={src}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 z-10",
          "p-3 rounded-full bg-white/90 text-gray-900 shadow-lg",
          "transition-all duration-300 transform",
          "hover:bg-white hover:scale-110 hover:shadow-xl",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2',
          "dark:bg-gray-800/90 dark:text-white"
        )}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 z-10",
          "p-3 rounded-full bg-white/90 text-gray-900 shadow-lg",
          "transition-all duration-300 transform",
          "hover:bg-white hover:scale-110 hover:shadow-xl",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2',
          "dark:bg-gray-800/90 dark:text-white"
        )}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-center gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg dark:bg-gray-800/80">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white/50",
                "dark:focus:ring-offset-gray-800/50",
                index === selectedIndex 
                  ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500 scale-110" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-black/70 text-white backdrop-blur-sm">
          {selectedIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
