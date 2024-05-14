import React from 'react'
import imageCup from '../../src/assets/images/mobile/image-stand-out.jpg' 
import imageDesktop from '../../src/assets/images/desktop/image-stand-out.jpg'


export const StandAudience = () => {

    const isHidden = window.innerWidth > 1024 ? false : true;

    const title = 'Stand out to the right audience';
    const description = `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.`;
  return (
    <div className='flex flex-col lg:flex-row'>

        <div className='lg:w-11/12'>
            <img src={imageCup} alt="Imagen de una copa" className='lg:hidden w-full'/>
            {isHidden ?  null : <img src={imageDesktop} alt="Imagen de una copa" className='hidden lg:block w-full'/>}
        </div>

        <div className='bg-veryLightGray text-center
        py-10 px-4 flex flex-col items-center justify-center container__texto '>
            <h1 className='text-3xl w-3/4 font-extrabold
            font-fraunces text-veryDarkBlackBlue lg:text-left lg:text-6xl'>
                {title}
            </h1>
            <p className='text-lg text-veryDarkBlackBlue py-4
            font-barlow lg:text-left lg:w-3/4'>
                {description}
            </p>
            <button className='font-fraunces uppercase font-extrabold
            LearMore__btn-pink'>Learn more</button>
        </div>
    </div>
  )
}
