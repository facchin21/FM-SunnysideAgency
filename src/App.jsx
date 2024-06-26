import { useState } from 'react'
import { Banner } from './components/Banner'
import { TransformBrand } from './components/TransformBrand'
import { StandAudience } from './components/StandAudience'
import { GraphicDesign } from './components/GraphicDesign'
import { Photography } from './components/Photography'
import { Testimonials } from './components/Testimonials'
import { Image } from './components/Image'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Banner />
      <TransformBrand/>
      <StandAudience/>
      <div className='flex flex-col lg:flex-row'>
        <GraphicDesign/>
        <Photography/>
      </div>
      <Testimonials/>
      <Image/>
      <Footer/>
    </>
  )
}

export default App
