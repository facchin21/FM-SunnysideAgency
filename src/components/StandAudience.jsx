import React from 'react'
import imageCup from '../../src/assets/images/mobile/image-stand-out.jpg' 


export const StandAudience = () => {

    const title = 'Stand out to the right audience';
    const description = `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.`;
  return (
    <>
        <img src={imageCup} alt="Imagen de un huevo" />

        <div className='bg-veryLightGray text-center
        py-10 px-4 flex flex-col items-center justify-center'>
            <h1 className='text-3xl w-3/4 font-extrabold
            font-fraunces text-veryDarkBlackBlue'>
                {title}
            </h1>
            <p className='text-lg text-veryDarkBlackBlue py-4
            font-barlow'>
                {description}
            </p>
            <button className='font-fraunces uppercase font-extrabold
            LearMore__btn-pink'>Learn more</button>
        </div>
    </>
  )
}
