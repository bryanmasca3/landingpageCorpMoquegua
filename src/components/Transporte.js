import React,{useState} from 'react'

const Transporte = () => {
  const [info,setInfo]=useState([
    { "image":"4.jpg",
    "num":"1",
    "title":"Planificación y supervisión operativa",
    "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."
 },
 { "image":"5.jpg",
 "num":"2",
 "title":"Mantenimiento y seguridad",
 "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."
},
{ "image":"6.jpg",
    "num":"3",
    "title":"Escoltas por convoy",
    "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."
 },
 { "image":"7.jpeg",
    "num":"4",
    "title":"Monitoreo a través de GPS",
    "description":"Architecture is both the process and the product of planning, and constructing buildings or any other structures."
 },
  
 ]);
  return (
    <div className='bg-grayback py-20' id="section-transporte">
   <div class="px-8">
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
  NUESTRA GESTIÓN <span className='text-main'> Y SISTEMA DE TRANSPORTE</span>
    </h2>
    <p className='text-center font-Baskerville font-light  text-gray-500'>Nuestro principal aliado es VOLVO, nuestras unidades transitan en rutas críticas 
sin ningún problema y brindan a nuestros colaboradores comodidad y confort 
durante su labor.</p>
  
  </div>

  <div class="grid gap-4 md:grid-cols-4">
    {info.map((item)=>(
        <div class=" pb-10 flex flex-col group gap-4 bg-white shadow-lg font-Baskerville justify-between group ">
            <div className='relative '>
              <div className='h-72 overflow-hidden'>
              <img
                        src={item.image}
                        class="block w-full"
                        alt="Exotic Fruits"
                        className='h-full w-full object-cover group-hover:scale-110 transition duration-150 ease-in-out'
    /></div>
               
                <div className='px-8 py-4'>
                  
                <h2 className='font-bold  text-2xl text-second '>{item.title} </h2>  
                </div>
                                            
            </div>
            <div className='px-8'>
                <p className='text-gray-500 font-light   '>{item.description} </p>
            </div>
            <div className='px-8'>
                <hr className='bg-slate-500 border-1'/>
            </div>
            <div className='flex justify-center'>
            <button type="button" className="inline-block px-8 py-4 border-2 border-white bg-main text-white font-medium text-xs leading-tight uppercase rounded hover:text-main hover:bg-white hover:border-main  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">VER MAS</button>
            </div>
        </div>
    ))}    
  </div>
</div>

    </div>
  )
}

export default Transporte