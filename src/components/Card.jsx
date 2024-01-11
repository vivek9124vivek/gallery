import React from 'react'

const Card = ({image}) => {
  const tags = image.tags.split(',');
  return (
    <div className='py-3 px-2 bg-blue-300 rounded-lg text-black-200 hover:shadow-2xl'>
        <img 
        src={image.webformatURL}
        alt='image'
    className='rounded mb-5 w-full'
        />
       <div><p>Author: <span className='bg-white rounded-lg px-1'>{image.user}</span> </p></div>
       <div><p>View: <span className='bg-white rounded-lg px-1'>{image.views}</span> </p></div>
       <div><p>Likes: <span className='bg-white rounded-lg px-1'>{image.likes}</span> </p></div>


       <div className='flex gap-3 text-black-200 mt-2'>
              {/* <div className='bg-slate-400 py-1 px-2 rounded-md bg-white'><p>tag1</p></div> */}

              {tags.map(tag=>(
                <div className='bg-slate-400 py-1 px-2 rounded-md bg-white'><p>#{tag}</p></div>
              ))}
              
       </div>
    </div>
  )
}

export default Card