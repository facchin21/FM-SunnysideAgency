import React from 'react'
import imageEgg from '../../src/assets/images/mobile/image-transform.jpg' 


export const TransformBrand = () => {
  const title = 'Transform your brand';
  const description = 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:order-2 lg:w-full'>
        <img src={imageEgg} alt="Imagen de un huevo"
        className='lg:w-full'/>
      </div>

        <div className='bg-veryLightGray text-center
        py-10 px-4 flex flex-col items-center justify-center lg:order-1 lg:w-full'>
            <h1 className='text-3xl w-3/4 font-extrabold
            font-fraunces text-veryDarkBlackBlue lg:text-left lg:text-6xl'>
                {title}
            </h1>
            <p className='text-lg text-veryDarkBlackBlue py-4
            font-barlow lg:text-left lg:w-3/4'>
              {description}
            </p>
            <button className='font-fraunces uppercase font-extrabold
            LearMore__btn-yellow'>Learn more</button>
        </div>
    </div>
  )
}
