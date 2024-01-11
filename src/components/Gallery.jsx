import React, { useState,useEffect } from 'react'
import Card from './Card'

const Gallery = () => {
    const [images,setImages]= useState([]);
    const [term,setTerm]= useState('');
    const [loading,setLoading]=useState(true);

    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API}&q=${term}&image_type=photo`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            setImages(data.hits);
             
          })
        .catch(err => console.log(err))
    },[]);

    
   
  return (
    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 px-8 py-4'>
        {images.map(image=>(
          <Card key={image.id} image={image}  />
        ))}
    </div>
  )
}

export default Gallery