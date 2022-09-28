import React,{useState} from 'react'

const Data = () => { const [info,setInfo]=useState([
  { "image":"",
  "num":"0",
  "title":"Accidentes",
},
{ "image":"",
"num":"8",
"title":"Años en ruta",
},
{ "image":"",
  "num":"0",
  "title":"Galones derramados",
},
{ "image":"",
  "num":"0",
  "title":"Incidentes Ambientales",
},

]);
return (
  <div className='bg-white py-10'>

<div class="mb-4">
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
  NUESTROS <span className='text-main'>DATOS</span></h2>
  </div>

 <div class="grid gap-4 md:grid-cols-4">
   {info.map((item)=>(
       <div class=" py-10 flex flex-col font-Baskerville justify-between ">
           <div className='relative'>
             
             {/**  <img
                       src="5.jpg"
                       class="block w-full"
                       alt="Exotic Fruits"
                       className='h-full w-full object-cover absolute top-0 right-0'
                       />*/}
               <div className='text-main flex justify-center font-bold text-7xl'>
                   {item.num}
               </div>
               <div className=''>
                 
               <h2 className='font-light text-center text-xl gray-800'>{item.title} </h2>  
               </div>                               
               
           </div>                         
       </div>
   ))}    
 </div>

   </div>
  )
}

export default Data