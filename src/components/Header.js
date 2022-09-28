import React from 'react'

import { BsFacebook,BsYoutube } from "react-icons/bs";
const Header = () => {
  return (
    <nav class="sticky bg-white shadow-lg top-0 z-50" id='section-header'>
    <div class="max-w-6xl mx-auto px-4">
      <div>
        <div class="flex space-x-7  justify-between">
          <div>    
            <a href="#" class="flex items-center px-2">
              <img src="logo1.jpeg" alt="Logo" class="py-2 w-40 mr-2"/>            
            </a>
          </div>

          <div class="hidden md:flex items-center space-x-1">
            <a href="#section-nosotros" class="px-2 text-sm text-gray-500 border-b-4 border-main font-semibold ">NOSOTROS</a>
            <a href="#section-politic" class="px-2 text-sm text-gray-500 font-semibold hover:text-main transition duration-300 transform ease-out">POLITICAS</a>
            <a href="#section-flota" class="px-2 text-sm text-gray-500 font-semibold hover:text-main transition duration-300">FLOTA</a>
            <a href="#section-transporte" class="px-2 text-sm text-gray-500 font-semibold hover:text-main transition duration-300">GESTION Y TRANSPORTE</a>
            <a href="#section-capacitaciones" class="px-2 text-sm text-gray-500 font-semibold hover:text-main transition duration-300">CAPACITACIONES</a>
            <a href="#section-contactanos" class="px-2 text-sm text-gray-500 font-semibold hover:text-main transition duration-300">CONTACTANOS</a>
          </div>
          <div class="hidden md:flex items-center space-x-3 ">
            <BsFacebook color='#33a490' size={'1.5em'}/>
            <BsYoutube color='#33a490' size={'1.5em'}/>
          </div>
        </div>

    

        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
          <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        </div>
      </div>
    </div>

    <div class="hidden mobile-menu">
      <ul class="">
        <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
        <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
        <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
        <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
      </ul>
    </div>

  </nav>
  )
}

export default Header