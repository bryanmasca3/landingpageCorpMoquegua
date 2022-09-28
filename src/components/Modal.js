import React from 'react'
import { FaShuttleVan,
    FaCarSide } from "react-icons/fa";
    import { GiTruck } from "react-icons/gi";
const Modal = () => {
  return (
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">      
      <div class="modal-body relative">
       <div className='grid gap-4 grid-cols-2 rounded-3xl'>
                <div className='h-96'>
                    <img
                    src="3.jpg"
                    class="block w-full"
                    alt="Exotic Fruits"
                    className='h-full w-full object-cover'
                    />
                </div>
                <div className='flex flex-col justify-center gap-4 font-Baskerville text-second py-10 px-12'>
                    <div className='h-1 w-1/3 bg-main'></div>
                    <h2 className='
    
    font-bold
    lg:text-3xl'>UNIDADES MAYORES</h2>
                    <p className='font-bold'>NUESTROS SERVICIOS</p>
                    <ul className='font-light'>
                        <li>Transporte de combustibles líquidos a minas.</li>    
                        <li>Transporte de lubricantes a granel.</li>  
                        <li>Transporte de etanol.</li>  
                        <li>Transporte de petróleo crudo.</li>   
                    </ul>
                    <div className='text-main'>
                    <GiTruck size={"3.5rem"}/>
                    </div>
                    
                </div>

       </div>
      </div>     
    </div>
  </div>
</div>
  )
}

export default Modal
