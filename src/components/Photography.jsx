import React from 'react'

export const Photography = () => {
  const title = 'Photography'
  const description = 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'  
  return (
    <div className='Photography__container flex flex-col items-center pb-12'>
        <div className='pt-56'>
            {/* LO UTILIZO PARA GENERAR EL ESPACIO "GRANDE" COMO EN EL DISENIO */}
        </div>
        <h1 className='text-darkBlue text-4xl 
        font-fraunces font-black text-center
        pt-96'>{title}</h1>
        <p className='text-center w-3/4 pt-7
        font-barlow font-bold text-darkBlue
        text-lg'>
            {description}
        </p>
    </div>
  )
}
