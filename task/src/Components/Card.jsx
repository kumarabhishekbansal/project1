import React from 'react'
import { useNavigate } from 'react-router-dom';
const Card = ({src,title,desc,price,id}) => {
    const navigate=useNavigate();
    const handleAddToCart=({src,title,desc,price,id})=>{
        if(localStorage.getItem("cartitems"))
        {
            const data=JSON.parse(localStorage.getItem("cartitems"));
            var flag=false;
            for(var i=0;i<data.length;i++)
            {
                if(data[i].id===id)
                {
                    flag=true;
                    break;
                }
            }
            if(!flag)
            {
                const data=[...JSON.parse(localStorage.getItem("cartitems")),{src,title,desc,price,id,quantity:1}];
                localStorage.setItem("cartitems",JSON.stringify(data));
            }
        }else{
            localStorage.setItem("cartitems",JSON.stringify([{src,title,desc,price,id,quantity:1}]));
        }
    }

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

        {/* Add to cart button */}

        <div>
            <h1 className='border-2 rounded-full bg-orange-600 p-4 cursor-pointer hover:bg-orange-300 selection:bg-green-300 active:scale-110' onClick={()=>handleAddToCart({src,title,desc,price,id})}>Add to cart</h1>
        </div>
        {/* view cart */}
        <div>
            <h1 className='border-2 rounded-full bg-green-600 p-4 cursor-pointer hover:bg-orange-300 selection:bg-green-300 active:scale-110' onClick={()=>navigate("/viewCart")}>View cart</h1>
        </div>
    </div>
   </>
  )
}

export default Card