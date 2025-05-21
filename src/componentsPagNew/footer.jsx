import React from 'react';

export function Footer() {
  return (
    <footer className='bg-dark text-light pt-4 pb-2 mt-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 mb-3 mb-md-0 d-flex align-items-center'>
            <img
              src='/docs/4.0/assets/brand/bootstrap-solid.svg'
              alt='Moon Agency Logo'
              width='40'
              height='40'
              className='me-2'
            />
            <span className='fw-bold fs-5'>Moon Agency</span>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <h6 className='fw-semibold mb-2'>Enlaces rápidos</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='bi bi-house-door me-2'></i>Inicio
                </a>
              </li>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='bi bi-cash-coin me-2'></i>Cotizar
                </a>
              </li>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='bi bi-box-seam me-2'></i>Paquetes
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-4 text-md-end'>
            <h6 className='fw-semibold mb-2'>Contáctanos</h6>
            <div>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='bi bi-whatsapp'></i>
              </a>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='bi bi-envelope'></i>
              </a>
              <a href='#' className='text-light fs-5'>
                <i className='bi bi-globe'></i>
              </a>
            </div>
            <div className='small mt-2'>
              <i className='bi bi-geo-alt me-1'></i>
              Medellín, Colombia
            </div>
          </div>
        </div>
        <hr className='border-secondary my-3' />
        <div className='text-center small'>
          &copy; {new Date().getFullYear()} Moon Agency. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
