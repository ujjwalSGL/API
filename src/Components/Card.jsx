import React from 'react'

export const Card = ({ MovieData }) => {
    const { Poster, Title } = MovieData;
    return (
        <div className='ml-44 my-10 flex justify-center items-center'>
            <img src={Poster} alt="" className='w-56 h-80 shadow-2xl' />
            <h1 className='h-5 text-lg '>{Title}</h1>
        </div>
    )
}