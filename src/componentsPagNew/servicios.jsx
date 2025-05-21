import React from 'react';

export function Servicios() {
  return (
    <main>
      <section className='container my-5'>
        <h2 className='text-center mb-4 fw-bold text-dark'>
          Nuestros Servicios
        </h2>
        <div className='row justify-content-center'>
          <div className='col-md-4 mb-4'>
            <div className='card h-100 shadow-lg border-0 rounded-4 servicio-card'>
              <div className='card-body text-center'>
                <div className='bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                  <i className='bi bi-rocket-takeoff fs-1 text-primary'></i>
                </div>
                <h5 className='card-title fw-semibold'>Viajes Espaciales</h5>
                <p className='card-text'>
                  Organizamos experiencias únicas fuera de este mundo, con total
                  seguridad y comodidad.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='card h-100 shadow-lg border-0 rounded-4 servicio-card'>
              <div className='card-body text-center'>
                <div className='bg-success bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                  <i className='bi bi-people fs-1 text-success'></i>
                </div>
                <h5 className='card-title fw-semibold'>
                  Atención Personalizada
                </h5>
                <p className='card-text'>
                  Nuestro equipo te acompaña en cada paso para que tu viaje sea
                  inolvidable.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='card h-100 shadow-lg border-0 rounded-4 servicio-card'>
              <div className='card-body text-center'>
                <div className='bg-warning bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                  <i className='bi bi-star fs-1 text-warning'></i>
                </div>
                <h5 className='card-title fw-semibold'>Experiencias Premium</h5>
                <p className='card-text'>
                  Disfruta de servicios exclusivos y actividades premium en
                  todos nuestros paquetes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
