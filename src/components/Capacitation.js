import React,{useState} from 'react'
import { MdGroups,
  MdStar,
  MdOutlineSecurity,
  MdDirectionsCar,
  MdOutlineBlock,
  MdDoDisturbOff } from "react-icons/md";
const Capacitation = () => {
  const [info,setinfo]=useState([
    { "icon":<MdGroups  size={'1.5em'}/>,
     "title":"HAZMAT I y II"},
     { "icon":<MdStar  size={'1.5em'}/>,
     "title":"Plan de Contingencia"},
     { "icon":<MdOutlineSecurity  size={'1.5em'}/>,
     "title":"Fatiga y somnoliencia"},
     { "icon":<MdDirectionsCar  size={'1.5em'}/>,
     "title":"Primeros Auxilios"},
     { "icon":<MdOutlineBlock  size={'1.5em'}/>,
     "title":"Uso de extintores y combate contra incendios"},
     { "icon":<MdDoDisturbOff  size={'1.5em'}/>,
     "title":"Campaña y talleres"},
 ]);
  return (
    <div className='bg-second  flex font-Baskerville'  id="section-capacitaciones"
    >  
    <div className='flex flex-col justify-around py-10 px-10 gap-12'>
        <div>
          <h2 className='  mb-4
    
    font-bold
    text-white
    text-center
    lg:text-3xl
    md:mb-6
    font-Baskerville '>CAPACITACIÓN
A COLABORADORES</h2>
<p className='text-center font-Baskerville font-light text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
      {info.map((item)=>(
          <div class="">
        <div class="mb-2 flex justify-center">
          <div className='p-2 inline-block rounded-full border-2 text-white border-white transition duration-150 ease-in-out hover:bg-main hover:border-white hover:text-white'>
            {item.icon}
          </div>              
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="font-light  text-white text-center px-16 font-Baskerville ">{item.title}</div>        
        </div>
      </div>
      ))}    
    </div>
    </div>
    <div >
        <div>
          <img 
            src="1.jpg"
            class="block w-full"
            alt="Exotic Fruits"
            className='h-full w-full overflow-hidden object-cover'
            />
        </div>
    </div>
   </div>
  )
}

export default Capacitation