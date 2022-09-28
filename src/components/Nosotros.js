import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
const Nosotros = () => {
  return (
    <div className='bg-main' id="section-nosotros">
    <div class="">
           
        <div className='grid md:grid-cols-2'>
            <div className='py-20 px-28 flex flex-col justify-between'>
                <h2
                class="
                mb-4                
                font-bold
                text-white
                lg:text-4xl
                md:mb-6
                font-Baskerville
                "
            >
        QUIENES SOMOS
            </h2>
            <div>
            <p class="text-left font-Baskerville text-white">
                Somos una empresa líder en la regíon de Moquegua, especializados en el servicio de transporte de combustible, alquiler de cisternas y carga en general.
                </p>
                <p class="text-left font-Baskerville font-normal text-white mt-3">Nos hemos desempeñado en la industria minera y de construcción.</p>
                <p class="text-left font-Baskerville font-normal text-white mt-3">Además contamos con bases en Tacna y Moquegua.</p>
            </div>
            <div className='flex mt-8'>
                    <div className='flex flex-col justify-center items-center font-Baskerville text-white'>
                        <BsCheckCircleFill size={"2.5rem"}/>
                        <h1 className='font-bold'>Estamos Certificados</h1>
                        <p className='font-normal'>ISO 9001</p>
                    </div>
            </div>
               
            </div>
            <div className='grid md:grid-cols-2'>
                <div className="">
                  <img
                src="5.jpg"
                class="block w-full"
                alt="Exotic Fruits"
                className='h-full w-full object-cover transition duration-150 ease-in-out hover:scale-110'
                />
                    </div>
                    <div className="">
                  <img
                src="4.jpg"
                class="block w-full"
                alt="Exotic Fruits"
                className='h-full w-full object-cover transition duration-150 ease-in-out hover:scale-110'
                />
                    </div>
                    <div className="">
                  <img
                src="1.jpg"
                class="block w-full"
                alt="Exotic Fruits"
                className='h-full w-full object-cover transition duration-150 ease-in-out hover:scale-110'
                />
                    </div>
                    <div className="">
                  <img
                src="2.jpg"
                class="block w-full"
                alt="Exotic Fruits"
                className='h-full w-full object-cover transition duration-150 ease-in-out hover:scale-110'
                />
                    </div>
                </div>
           
        </div>
  </div></div>
  )
}

export default Nosotros