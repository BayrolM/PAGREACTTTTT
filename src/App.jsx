import React from 'react';
import { Navbar } from './componentsPagNew/navbar';
import { Carousel } from './componentsPagNew/carousel';
import { Servicios } from './componentsPagNew/servicios';
import { Info } from './componentsPagNew/Info';
import { Footer } from './componentsPagNew/footer';

function App() {
  return (
    <>
      <header>{/* Logo, título, etc */}</header>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Carousel />
        <Servicios />
        <aside>
          <Info />
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
