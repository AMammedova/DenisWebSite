import React,{useState} from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function ServiceRightPartText({item}) {
    const [showMore, setShowMore] = useState(false);
    
  return (
    <div>
      
        <div className='right_part_wrapper'>
       <div className="right_part_img">
         <div className='right_img_wrapper' style={{backgroundImage:`url(${item.url})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
         
         </div>
       </div>
       <div className='right_part_text'>
         <h3 className='right_part_text_title'>{item.title}</h3>
         <p className='right_part_text_p'> {showMore ? item.text : `${item.text.substring(0, 200)}...`}</p>
         <button className='morebtn' onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"} <FaArrowRight/></button>
       </div>
       </div>
    </div>
  )
}
