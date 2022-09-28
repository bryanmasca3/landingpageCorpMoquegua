import React,{useState} from 'react'
import { MdMailOutline,
    MdPhoneEnabled,
    MdLocationPin} from "react-icons/md";
const Location = () => {
    const [info,setInfo]=useState([
        { "icon":<MdMailOutline  size={'1.5em'}/>,
         "title":"Quick Contact",
         "description":"Email: Promina@7oroof.com"},
         { "icon":<MdPhoneEnabled  size={'1.5em'}/>,
         "title":"Our Location",
         "description":"2307 Beverley Rd Brooklyn, New York 11226 US."},
         { "icon":<MdLocationPin  size={'1.5em'}/>,
         "title":"Contact",
         "description":"Phone: 55 654 541 17"}
     ]);
  return (
    <div className='bg-white py-20'>
    <div class="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className='grid gap-4 md:grid-cols-4'>
            {info.map((item)=>(
                <div className='flex gap-4'>
                                        <div>
                <div className='p-4 inline-block rounded-full  text-white transition duration-150 ease-in-out bg-main'>
                {item.icon}
                </div>   
                </div>
                <div className='flex flex-col'>
                        <p className='font-Baskerville font-bold'>{item.title}</p>
                        <p className='font-Baskerville font-light text-gray-500'>{item.description}</p>
                </div>
                </div>
            ))}
           
            
        </div>
        </div>
        </div>
  )
}

export default Location