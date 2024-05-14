import React from 'react';
import coneImage from '../../src/assets/images/mobile/image-gallery-cone.jpg';
import milkBottlesImage from '../../src/assets/images/mobile/image-gallery-milkbottles.jpg';
import orangeImage from '../../src/assets/images/mobile/image-gallery-orange.jpg';
import sugarCubesImage from '../../src/assets/images/mobile/image-gallery-sugar-cubes.jpg';

export const Image = () => {
  const images = [
      { src: milkBottlesImage, alt: 'Milk Bottles' },
      { src: orangeImage, alt: 'Orange' },
      { src: coneImage, alt: 'Cone' },
    { src: sugarCubesImage, alt: 'Sugar Cubes' },
  ];

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {images.map((image, index) => (
          <div key={index} className="h-auto w-auto">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
    </div>
    </>
  );
};