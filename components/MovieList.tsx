import React from 'react';

import { MovieInterface } from '@/types';
import MovieCard from '@/components/MovieCard';
import { isEmpty } from 'lodash';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


interface MovieListProps {
  data: MovieInterface[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <Carousel>
          <>
            <CarouselItem className="grid gap-2 grid-cols-4">

            
            </CarouselItem>
          </>
            <CarouselNext/>
            <CarouselPrevious/>

        </Carousel>
        {/* <div className="grid grid-cols-4 gap-2 bg-purple-500 overflow-hidden">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default MovieList;
