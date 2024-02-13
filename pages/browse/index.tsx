import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import useMovieTags from '@/hooks/useMovieTags';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


const Browse = () => {
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();
  const {data: popular = []} = useMovieTags("Popular on Netflix")
  const {data: newRel = []} = useMovieTags("New Release")
  const {data: awus = []} = useMovieTags("Award-wining US Crime TV Thrillers & Mystries")
  

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40 bg-black">
        <MovieList title="Popular on Netflix" data={popular} />
        <MovieList title="My List" data={favorites} />
        <MovieList title="New Release" data={newRel} />
        <MovieList title="Award-wining US Crime TV Thrillers & Mystries" data={awus} />
      </div>
    </>
  )
}

export default Browse;
