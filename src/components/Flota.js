import React,{useState,useEffect,useRef } from 'react'
import { FaShuttleVan,
  FaCarSide } from "react-icons/fa";
  import { GiTruck } from "react-icons/gi";
  import Modal from './Modal';
  import { gsap } from "gsap";
const Flota = () => {
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
  //  gsap.to(boxRef.current, { rotation: "+=360" });
  });
  
    const [info,setInfo]=useState([
        { "image":"",
        "icon":<GiTruck size={"3.0rem"} />,
        "title":"Unidades mayores",
        "count":"20",
        "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."},
        { "image":"",
        "icon":<FaShuttleVan size={"3.0rem"} />,
        "title":"Unidades menores",
        "count":"16",
        "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."},
        { "image":"",
        "icon":<FaCarSide size={"3.0rem"} />,
        "title":"Camioneta Escoltada",
        "count":"4",
        "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."},
      
     ]);
  return (
    <div className='bg-grayback py-20' id="section-flota">
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
  NUESTRA <span className='text-main'>FLOTA</span>
    </h2>
    <p className='text-center font-Baskerville font-light  text-gray-500'>Nuestro principal aliado es VOLVO, nuestras unidades transitan en rutas críticas 
sin ningún problema y brindan a nuestros colaboradores comodidad y confort 
durante su labor.</p>
  
  </div>

  <div class="grid gap-4 md:grid-cols-3">
    {info.map((item)=>(
        <div class=" py-10 flex flex-col group  bg-white shadow-lg font-Baskerville justify-between h-96 hover:bg-main hover:text-white hover:scale-105 transition duration-150 ease-in-out" ref={boxRef}>
            <div className='relative '>
              
              {/**  <img
                        src="5.jpg"
                        class="block w-full"
                        alt="Exotic Fruits"
                        className='h-full w-full object-cover absolute top-0 right-0'
                        />*/}
                <div className='text-main flex justify-center group-hover:text-white '>
                    {item.icon}
                </div>
                <div className=''>
                  
                <h2 className='font-bold text-center text-2xl text-second group-hover:text-white '>{item.title} </h2>  
                </div>
                <div className=''>
                <hr className='mt-10 w-3/4 mx-auto'></hr>
                </div>
                
                
            </div>
            <div className='px-8'>
                <p className='text-gray-500 font-light text-center group-hover:text-white '>{item.description} </p>
            </div>
            <div className='flex justify-center'>
            <button type="button" className="inline-block px-8 py-4 border-2 border-white bg-main text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter11">VER MAS</button>
            </div>
            <Modal/>
        </div>
    ))}    
  </div>
</div>

    </div>
  )
}

export default Flota