import React from 'react'

export const Testimonials = () => {
  const testimolias = [
    {
        image: '../../src/assets/images/image-emily.jpg',
        description: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: 'Emily R.',
        profesion: 'Marketing Director'
    },
    {
        image: '../../src/assets/images/image-thomas.jpg',
        description: "Sunyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: 'Thomas S.',
        profesion: 'Chief Operating Officer'
    },
    {
        image: '../../src/assets/images/image-jennie.jpg',
        description: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: 'Jennie F.',
        profesion: 'Business Owner'
    }

  ]
    const title = ' Client Testimonials'
    
  return (
    <div className='pt-12 lg:py-64'>
        <h1 className='text-center
        text-veryDarkGrayishBlue font-fraunces
         uppercase text-xl lg:text-3xl lg:pb-24 lg:pt-0'>{title}
        </h1>

        <div className='flex flex-col
         justify-center items-center lg:flex-row'>
            {testimolias.map((testimonia, index) => {
                return (
                    <div key={index} className='flex flex-col
                     justify-center items-center py-10'>
                        <img src={testimonia.image} alt="testimonia"
                         className='w-24 h-24 rounded-full'/>
                        <p className='text-center text-veryDarkBlackBlue 
                        font-barlow text-lg py-4 font-medium w-3/4'>
                            {testimonia.description}
                        </p>
                        <h3 className='pb-2 text-xl
                        font-bold font-fraunces text-veryDarkBlackBlue'>
                            {testimonia.name}
                        </h3>
                        <p className='text-veryDarkGrayishBlue2
                        text-sm font-medium font-fraunces'>
                            {testimonia.profesion}
                        </p>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
