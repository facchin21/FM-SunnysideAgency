import React from 'react'
import arrow from '../assets/images/icon-arrow-down.svg'

const menuItems = [
    {
        title : "About",
        link : "#"
    },
    {
        title : "Services",
        link : "#"
    },
    {
        title : "Projects",
        link : "#"
    },
    {
        title : "Contact",
        link : "#"
    }
]

const title = "sunnyside"

const mostrarMenu = () => {
    const menu = document.querySelector('.menu__container')
    menu.classList.toggle('menu__container--active')
}

export const Banner = () => {
  return (
    <div className="banner__container">
        <header className='flex justify-between px-8 py-4 items-center'>
            <div>
                <h1 className='font-bold text-3xl
                text-white font-barlow'>{title}
                </h1>
            </div>
            <div onClick={mostrarMenu}>
                {/* Icono menu */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </div>
            <div className='menu__container'>
                <ul>
                    {menuItems.map((item, index)=>{})}
                </ul>
            </div>
        </header>

        <div className='w-full text-center flex 
        justify-center items-center flex-col '>
            <h1 className='text-white text-4xl
             py-8 w-3/6 font-fraunces font-extrabold'>WE ARE CREATIVES
            </h1>
            <div>
                <img src={arrow} alt="Imagen de flecha"/>
            </div>
        </div>
    </div>
  )
}