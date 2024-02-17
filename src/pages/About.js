import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Image} from "@nextui-org/react";
import CommentCard from '../components/commentCard';

import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";



import LoadingCard from "./components/loading";

export default function About() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const API_URL = `http://www.omdbapi.com?apikey=c032e2d7`;
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);
        if (!response.ok) {
          throw new Error('Could not find movie ID');
        }
        const data = await response.json();
        setMovieDetail(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Handle error state or show an error message
      }
    };

    fetchMovieDetail();
  }, [id]);

  return (
    <>
      <div className='w-full flex flex-row items-center justify-center'>
        <div className='mx-auto w-full max-w-[1024px] pb-3 px-6 flex flex-row flex-wrap'>
        {movieDetail && (
          <>
            <div className="w-25 mb-3 flex justify-center">
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl w-full"
                  src={movieDetail.Poster !== "N/A" ? movieDetail.Poster: "https://via.placeholder.com/400"}
                  // width={100}
                />
              </div>  
            </div>
            <div className="w-75 px-6 mb-3 md:px-0">
              <div className='mb-3'>
                <h1 className='font-bold text-large font-xl mb-3'>{movieDetail.Title}</h1>
                <p className='text-small'>
                  {movieDetail.Plot}
                </p>
              </div>
              <div className='grid grid-cols-6 gap-4'>
                <div>
                  <p>
                    Release Date : {movieDetail.Released}
                  </p>
                  <p>
                    Language : {movieDetail.Language}
                  </p>
                  <p>
                    Running Time : {movieDetail.Runtime}
                  </p>
                  <p>
                    Genre : {movieDetail.Genre}
                  </p>
                  <p>
                    Classification : {movieDetail.Rated}
                  </p>
                </div>
                <div>
                </div>
              </div>
              <div className='w-full mb-3'>
                <h3 className='text-medium font-bold'>
                  Director
                </h3>
                <p>{movieDetail.Director}</p>
              </div>
              <div className='w-full mb-3'>
                <h3 className='text-medium font-bold'>
                  Writer
                </h3>
                <p>{movieDetail.Writer}</p>
              </div>
              <div className='w-full mb-3'>
                <h3 className='text-medium font-bold'>
                  Cast
                </h3>
                <p>{movieDetail.Actors}</p>
              </div>
            </div>
            <div className='w-25 mb-3'>
              {movieDetail.Ratings?.length > 0 && !loading ? (
                movieDetail.Ratings.map((rating) => (
                  <CommentCard key={rating.id} comment={rating} />
                ))
              ) : (
                Array.from({ length: 3 }).map((_, index) => (
                  <LoadingCard key={index} />
                ))
              )}
            </div>
            <div className='w-75 mb-3 px-6 md:px-0'>
              <Card>
                <CardHeader>
                  <h3>Detail</h3>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>Awards : {movieDetail.Awards}</p>
                  <p>Metascore : {movieDetail.Metascore}</p>
                  <p>IMDB Rating : {movieDetail.imdbRating}</p>
                  <p>IMDB Votes : {movieDetail.imdbVotes}</p>
                  <p>DVD : {movieDetail.DVD}</p>
                  <p>Box Office : {movieDetail.BoxOffice}</p>
                </CardBody>
              </Card>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
}
