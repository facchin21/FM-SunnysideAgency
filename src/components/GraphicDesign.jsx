import React from 'react'

export const GraphicDesign = () => {
  const title = 'Graphic Design'
  const description = 'Great desing make you memorable. We deliver artwork that underscores your brand message and captures potential clients attetion.'  
  return (
    <div className='Graphic__container flex flex-col items-center pb-12'>
        <div className='pt-56'>
            {/* LO UTILIZO PARA GENERAR EL ESPACIO "GRANDE" COMO EN EL DISENIO */}
        </div>
        <h1 className='text-darkCyan text-4xl 
        font-fraunces font-black text-center
        pt-96'>{title}</h1>
        <p className='text-center w-3/4 pt-7
        font-barlow font-bold text-darkCyan
        text-lg'>
            {description}
        </p>
    </div>
  )
}
