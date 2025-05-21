import React from 'react';

export function Navbar() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid w-100'>
          <a className='navbar-brand ms-5' href='#'>
            <img
              src='/docs/4.0/assets/brand/bootstrap-solid.svg'
              width='30'
              height='30'
              alt=''
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto me-5'>
              <li className='nav-item me-5'>
                <a className='nav-link active' aria-current='page' href='#'>
                  <i className='bi bi-house-door me-2'></i>
                  Inicio
                </a>
              </li>
              <li className='nav-item me-5'>
                <a className='nav-link' href='#'>
                  <i className='bi bi-cash-coin me-2'></i>
                  Cotizar
                </a>
              </li>
              <li className='nav-item me-5'>
                <a className='nav-link ' href='#'>
                  <i className='bi bi-box me-2'></i>
                  Paquetes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
