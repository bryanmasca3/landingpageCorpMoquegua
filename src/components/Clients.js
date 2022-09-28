import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

const Clients = () => {
  return (
    <div className='max-w-screen-lg px-4 py-3 border-t mx-auto md:px-8'>        
  <div> 
    <Splide 
     options={ {
        rewind: true,
        gap   : '1rem',
        perPage: 5,
        arrows : false,
        pagination:false,
        autoplay:true,
        perMove: 1,
      } }
      aria-label="My Favorite Images">
  <SplideSlide>
    <img src="clients/1.png" alt="Image 1" width={"80%"}/>
  </SplideSlide>
  <SplideSlide>
    <img src="clients/2.jfif" alt="Image 2"width={"80%"}/>
  </SplideSlide>
  <SplideSlide>
    <img src="clients/3.png" alt="Image 2"width={"80%"}/>
  </SplideSlide>
  <SplideSlide>
    <img src="clients/4.png" alt="Image 2"width={"80%"}/>
  </SplideSlide>
  <SplideSlide>
    <img src="clients/5.png" alt="Image 2"width={"80%"}/>
  </SplideSlide>
  <SplideSlide>
    <img src="clients/6.png" alt="Image 2" width={"60%"}/>
  </SplideSlide>

</Splide>

  </div>
   
    </div>

  )
}

export default Clients