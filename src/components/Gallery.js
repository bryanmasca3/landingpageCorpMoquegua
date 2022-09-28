import React from 'react'
import SliderGallery from './SliderGallery'
const Gallery = () => {
  return (
    <div className='bg-second py-10'>
      <div className='flex flex-col justify-center gap-4 font-Baskerville'>
          <h2   class="
        mb-4
    
        font-bold
        text-center text-white
        lg:text-4xl
        md:mb-6
        font-Baskerville
      ">GALERÍA</h2>
          <p className='text-white text-center font-light'>Revisa nuestra galería de fotos y sigue la actualidad de CorMoquegua.</p>
          <div className='flex justify-center'>
          <button type="button" className="px-6
            py-2.5
            bg-white
            text-main
            font-bold      
          
           
            uppercase
            rounded
            shadow-md
                   
            transition
            duration-150
            ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        VER GALERIA
      </button>
          </div>
           
      </div>
 

<div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">      
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4">
      

    <SliderGallery/>




      </div>
    
    </div>
  </div>
</div></div>

  )
}

export default Gallery