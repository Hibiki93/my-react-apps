import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";


export default function About(){
    const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7'
    const { id } = useParams();
    const [movieDetail, setDetail] = useState('');
    const [loading, setLoading] = useState(false);

    const getDeatil = async(movieID)=>{
        setLoading(true);
        const response = await fetch(`${API_URL}&i=${movieID}&plot=full`)
        const data = await response.json();
        setTimeout(() => {
          // Simulating API call with setTimeout
          setDetail(data);
          setLoading(false);
        }, 1000); 
      }

    useEffect(()=>{
        getDeatil(id);
      },[]);

    return (
        <>
            <h1>About {id}</h1>
            <p>lorem lorem</p>
            
        </>
    )
}
