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
        link : "#",
        btnDifferent : true
    }
]

const title = "sunnyside"

const mostrarMenu = () => {
    const menu = document.querySelector('.menu__container')
    menu.classList.toggle('menu__container--active')
}
const isMobile = window.innerWidth < 1024

export const Banner = () => {
  return (
    <div className="banner__container">
        <header className='flex justify-between px-6 py-4'>
            <div>
                <h1 className='font-bold text-3xl
                text-white font-barlow'>{title}
                </h1>
            </div>

            {isMobile ? (
            <div onClick={mostrarMenu} className='
            flex flex-col items-end cursor-pointer'>
                {/* Icono menu */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>

                <div className='menu__container pt-8 mr-2'>
                    <ul className='bg-white py-5 p-12'>
                        {menuItems.map((item, index) => (
                            <li key={index} className='py-3 px-6 my-4
                            font-barlow text-center text-veryDarkGrayishBlue2
                            font-semibold transition-all duration-300
                            hover:text-black hover:bg-yellow rounded-3xl'>
                                <a href={item.link}>{item.title}</a>   
                            </li>
                        ))}
                    </ul>
                </div>
            </div>) : (
                <div>
                    <ul className='flex gap-6 justify-center items-center mr-6'>
                       {menuItems.map((item, index)=>
                        <li key={index}>
                            {item.btnDifferent ? (
                                <a href={item.link} className='font-barlow font-semibold px-8 py-2 rounded-3xl transition-all duration-300
                                 bg-white text-black hover:bg-veryLightGray'>  
                                    {item.title}
                                </a>
                            ):
                            <a href={item.link} className='text-white font-barlow font-semibold
                            text-lg'>
                                {item.title}
                            </a>}
                        </li>)} 
                    </ul>
                </div>
            )}
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
