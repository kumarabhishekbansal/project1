import React from 'react'

const Card = ({src,title,desc,price}) => {
  return (
   <>
    <div className="flex flex-col w-1/4 h-1/4 justify-center items-center text-center border-2 p-4">
        {/* image */}
        <div>
            <img src={src} alt={title} className='h-[200px]' />
        </div>
        {/* title */}
        <div>
            <h3>{title}</h3>
        </div>
        {/* description */}
        <div>
            <h4><span className='font-bold'>Description</span> : {desc}....</h4>
        </div>
        {/* price */}
        <div>
            <h2 className='font-bold text-lg'>RS {price}</h2>
        </div>
    </div>
   </>
  )
}

export default Card