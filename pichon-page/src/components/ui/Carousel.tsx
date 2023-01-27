import React, { ReactNode, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export const Carousel = (props: PropType) => {
  const { options, slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        {" "}
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        {" "}
        Next
      </button>
    </>
  );
};
