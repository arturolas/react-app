import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return <div className="container">
    <div className="flex items-center justify-center h-screen">
      <div>
        <p className="text-3xl text-center">No encontramos la página que estás buscando.</p>
        <p className="text-3xl text-center mb-2">Disculpa las molestias.</p>
        <p className="text-center underline"> <Link to="/">Regresar al Inicio</Link></p>
      </div>
    </div>
  </div>
}

export default NotFoundPage;