import React, { useState } from 'react'
import { MdGroups,
  MdStar,
  MdOutlineSecurity,
  MdDirectionsCar,
  MdOutlineBlock,
  MdDoDisturbOff } from "react-icons/md";
const Politic = () => {
    const [politic,setPolitic]=useState([
       { "icon":<MdGroups  size={'2.5em'}/>,
        "title":"Política del Sistema Integrado de gestión"},
        { "icon":<MdStar  size={'2.5em'}/>,
        "title":"Política de calidad"},
        { "icon":<MdOutlineSecurity  size={'2.5em'}/>,
        "title":"Política de Negativa al trabajo inseguro"},
        { "icon":<MdDirectionsCar  size={'2.5em'}/>,
        "title":"Política de seguridad Vial"},
        { "icon":<MdOutlineBlock  size={'2.5em'}/>,
        "title":"Política de alcohol y drogas"},
        { "icon":<MdDoDisturbOff  size={'2.5em'}/>,
        "title":"Política de fatiga y somnolencia"},
    ]);

  return (
    <div className='bg-grayback py-20' id="section-politic">
   <div class="max-w-screen-xl  mx-auto md:px-36 ">
  <div class="mb-10 md:mb-16">
    <h2
      class="
        mb-4
    
        font-bold
        text-center text-second
        lg:text-4xl
        md:mb-6
        font-Baskerville
      "
    >
  POLÍTICAS <span className='text-main'>DE
TRABAJO</span>
    </h2>
    <p className='text-center font-Baskerville font-light  text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  
  </div>

  <div class="grid gap-4 md:grid-cols-3">
    {politic.map((item)=>(
        <div class="pb-24">
      <div class="mb-2 flex justify-center">
        <div className='p-2 inline-block rounded-full  border-dotted border-4 text-main border-main transition duration-150 ease-in-out hover:bg-main hover:border-white hover:text-white hover:animate-spin'>
           {item.icon}
        </div>              
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="font-bold  text-second text-center px-16 font-Baskerville ">{item.title}</div>        
      </div>
    </div>
    ))}    
  </div>
</div>
    </div>
 
  )
}

export default Politic