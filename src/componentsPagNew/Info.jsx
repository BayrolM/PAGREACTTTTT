import React from 'react';

export function Info() {
  return (
    <aside>
      <div className='container my-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='card border-0 shadow-lg rounded-4 p-4 bg-light'>
              <div className='row align-items-center'>
                <div className='col-md-5 mb-3 mb-md-0'>
                  <div className='alert alert-info mb-0 text-center fw-semibold rounded-3'>
                    <i className='bi bi-stars fs-3 me-2 text-primary'></i>
                    ¡Promoción especial! <br />
                    <span className='fw-normal'>
                      Reserva tu viaje espacial este mes y obtén un{' '}
                      <span className='text-primary fw-bold'>
                        10% de descuento
                      </span>
                      .
                    </span>
                  </div>
                </div>
                <div className='col-md-7'>
                  <div>
                    <h6 className='card-title mb-3 text-primary fw-bold'>
                      Enlaces útiles
                    </h6>
                    <ul className='list-unstyled mb-0'>
                      <li className='mb-2'>
                        <a
                          href='#'
                          className='link-primary text-decoration-none'
                        >
                          <i className='bi bi-globe me-2'></i>
                          Sitio oficial de la Agencia Espacial
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='link-success text-decoration-none'
                        >
                          <i className='bi bi-whatsapp me-2'></i>
                          Contáctanos por WhatsApp
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
