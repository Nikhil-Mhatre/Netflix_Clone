import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useMovieTags = (movietag: string) => {
  const { data, error, isLoading } = useSwr(movietag ? `/api/tag/${movietag}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMovieTags;
