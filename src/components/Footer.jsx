import React from 'react'

import Facebook from '../assets/images/icon-facebook.svg'
import Instagram from '../assets/images/icon-instagram.svg'
import Twitter from '../assets/images/icon-twitter.svg'
import Pinterest from '../assets/images/icon-pinterest.svg'

const redes = [
    {
        src : Facebook,
        alt : "Icono de Facebook"
    },
    {
        src : Instagram,
        alt : "Icono de Instagram"
    },
    {
        src : Twitter,
        alt : "Icono de Twitter"
    },
    {
        src : Pinterest,
        alt : "Icono de Pinterest"
    }
]

const itemsLink = [
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
]

export const Footer = () => {
  const title = "sunnyside"
    return (
    <footer className='bg-footer py-12'>
        <h1 className='text-center text-textFooter
        font-black text-5xl font-barlow'>{title}</h1>
        <ul className='flex items-center justify-center
        gap-6 py-8'>
            {itemsLink.map((item,index) =>
            <li key={index}>
                <a href={item.link}
                 className='text-textFooter font-semibold
                 text-xl font-barlow
                 transition-all duration-300 hover:text-white'>
                    {item.title}
                </a>
            </li>
            )}
        </ul>

        <ul className='flex gap-6 items-center justify-center'>
            {redes.map((red,index) =>
                <li key={index}
                 className='h-7 w-7'>
                    <img src={red.src} alt={red.alt}
                    className='cursor-pointer w-full h-full' />
                </li>)}
        </ul>
    </footer>
  )
}
