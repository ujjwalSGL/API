import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Movies = () => {

    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=6b8d413c&s=Avengers"

    //    const res = await axios.get(API)

    const [data,setData] = useState([])



    const MovieData = async () => {
        const res = await axios.get(API)
        // console.log(res);
        console.log(res.data);
        setData(res.data.Search);
    }

    useEffect(() => {
        MovieData();
    }, [])

    return (
        <div>
            <div className='bg-yellow-400 flex justify-center items-center h-20'>
            <h1 className='text-xl border rounded-3xl bg-black p-3 text-white'>IMDB</h1>
            <input type="search" placeholder='Type Movie....' className='h-10 px-4 rounded-3xl mt-5 mx-80'/>
            </div>

        <div className='grid grid-cols-2 bg-black text-white'>
            
            {data.map((currentMovie)=>{
                return <Card key={currentMovie.imdbID} MovieData={currentMovie} />
                
            })}
        </div>
            </div>
    )
}
