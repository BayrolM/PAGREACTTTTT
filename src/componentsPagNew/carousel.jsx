import React from 'react';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

export function Carousel() {
  return (
    <main>
      <section>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner' style={{ height: '700px' }}>
            <div className='carousel-item active'>
              <img
                className='d-block w-100 h-100 object-fit-cover'
                src={img1}
                alt='First slide'
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100 h-100 object-fit-cover'
                src={img2}
                alt='Second slide'
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100 h-100 object-fit-cover'
                src={img3}
                alt='Third slide'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Anterior</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Siguiente</span>
          </button>
        </div>
      </section>
    </main>
  );
}
