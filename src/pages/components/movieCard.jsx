import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <Card shadow="sm" isPressable key={imdbID}>
      <Link to={`/about/${imdbID}`}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{Type}</p>
          <small className="text-default-500">{Year}</small>
          <h4 className="font-bold text-medium text-left">{Title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            width={270}
          />
        </CardBody>
      </Link>
    </Card>
        
    
  );
}

export default MovieCard;