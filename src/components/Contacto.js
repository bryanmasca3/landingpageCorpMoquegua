import React from 'react'
import { AiFillPhone } from "react-icons/ai";
const Contacto = () => {
  return (
    <div className='bg-four py-20' id="section-contactanos">
   <div class="max-w-screen-xl  mx-auto md:px-36 ">
 
<div className='flex shadow-2xl py-20 px-10 relative'>
  <div className='bg-main py-16 px-10 text-white font-Baskerville flex flex-col gap-10 rounded-lg'>
    <div className=''>
          <div className='mb-4'>
            <h2 className='font-bold text-lg'>Ubicacion</h2>
            <p className='font-light'>Urb. Via Toquepala Mz A, Lt 1 - Moquegua</p>
          </div>
          <div>
            <h2 className='font-bold text-lg'>Contacto</h2>
            <p className='font-light'>Email: <span>administracion@corporacionmoquegua.com</span></p>          
          </div>
    </div>
    <div>
        <h2 className='font-bold text-lg'>Nos comunicaremos con usted dentro de las 24 horas, o llámenos todos los días, de 09:00 a. m. a 12:00 p. m.</h2>
        <div className='flex gap-2  mt-10'>
        <div className='p-2 inline-block rounded-full  border-2 border-white text-white transition duration-150 ease-in-out'>
        <AiFillPhone/>
        </div>    
      
          <p className='text-2xl font-bold '>987 931 289</p>
        </div>
    </div>
  </div>
  <div className=' px-10'>
  <h2
      class="
        mb-4
    
        font-bold
      text-thrid
        lg:text-2xl
        md:mb-6
        font-Baskerville
      "
    >
  <span className='text-gray-800'>CONTACTANOS</span>
    </h2>
      <div><p className='font-Baskerville font-light text-gray-500'>Envianos tus Comentarios, dudas o sugerencias. Esto permite asegurar que nuestros clientes reciban la mejor calidad, precio y servicio. </p></div>
      
      <div class="grid gap-2 md:grid-cols-2 mt-6">
   
  <div class="">
   
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Nombre"
    />
  </div>
  <div class="">
    
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Empresa"
    />
  </div>
  <div class="">
    
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Email"
    />
  </div>
  <div class="">
   
   <input
     type="text"
     class="
       form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
     "
     id="exampleFormControlInput1"
     placeholder="Telefono"
   />
 </div>
      </div>
      <div className='mt-2'>  <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Mensaje"
    ></textarea></div>
      <div className='py-8'>
      <button type="button" class="inline-block px-10 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Enviar</button>
      </div>
      
  </div>
  
   
</div>
<div className='bg-main h-1 w-full'></div>
</div>
    </div>
 
  )
}

export default Contacto