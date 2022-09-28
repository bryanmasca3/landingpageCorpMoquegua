import React from 'react'

import { BsFacebook,BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='bg-thrid'>
        <div class="max-w-screen-xl px-4 py-10 mx-auto md:px-8  font-Baskerville">
        <div className=' grid gap-4 md:grid-cols-4'>        
        <div className='flex flex-col gap-10'>
                <div>
                <img
                        src="logo1_2.png"
                        class="block w-full"
                        alt="Exotic Fruits"
                        className='w-1/2'
                        />
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>
                    Es una empresa líder en la región de Moquegua, especializados en el servicio de 
                    transporte de combustible, alquiler de cisternas y carga en general.
                    Nos hemos desempeñado en la industria minera y de construcción.
                    Además contamos con bases en Tacna y Moquegua.
                    </p>
                </div>
                <div className='text-white flex gap-4'>
                <BsFacebook  size={'1.5em'}/>
            <BsYoutube  size={'1.5em'}/>
                </div>
        </div>

    </div>
        </div>
        <div className='py-4'>
            <p className='text-gray-300 text-center font-Baskerville font-light text-sm'>© Copyright 2022 CorMoquegua</p>
        </div>
    </div>
  
  )
}

export default Footer