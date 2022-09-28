import React from 'react'

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden h-screen">
      <div class="carousel-item active float-left w-full">
        <img
          src="3.jpg"
          class="block w-full"
          alt="Exotic Fruits"
          className='bg-cover'
        />
         <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
          <div className="flex justify-center items-start h-full">
            <div className="text-white text-center px-14 px-md-0 mt-48">
              <h2 className="text-5xl font-semibold mb-4">Cedes en
                Tacna y Moquegua.</h2>
                              <h5 className="text-lg font-semibold mb-6">Nos hemos
                desempeñado
                en la industria
                minera y de
                construcción
                </h5>
              <div className="md:space-x-2">              
                <a type="button" className="inline-block px-8 py-4 border-2 border-white bg-main text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="#!" role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">VER NOSOTROS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item  float-left w-full">
        <img
          src="5.jpg"
          class="block w-full"
          alt="Wild Landscape"
        />     
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
          <div className="flex justify-center items-start h-full">
            <div className="text-white text-center px-14 px-md-0 mt-36">
              <h2 className="text-5xl font-semibold mb-4">Estamos Certificados
</h2>
                              <h5 className="text-lg font-semibold mb-6">Certificado bajo los estándares de ISO: 9001:2015
                </h5>
                <div className="md:space-x-2">              
                <a type="button" className="inline-block px-8 py-4 border-2 border-white bg-main text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="#!" role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">VER POLITICAS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item float-left w-full">
        <img
        src="2.jpg"
          class="block w-full"
          alt="Camera"
        />
         <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
          <div className="flex justify-center items-start h-full">
            <div className="text-white text-center px-14 px-md-0 mt-48">
              <h2 className="text-5xl font-semibold mb-4">Equipo Calificado</h2>
                              <h5 className="text-lg font-semibold mb-6">Contamos con un
personal altamente
calificado y
comprometido con
su trabajo
                </h5>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider