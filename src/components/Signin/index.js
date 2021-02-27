import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NikeLogotype } from '../../images/nike.svg'

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSignin = () => {
    console.log('Signing in')
    document.cookie = "user=admin";
    history.push('/');
  }

  return <div className="container mx-auto">
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-6 sm:w-2/4 sm:px-0 md:px-0 md:w-1/4">
        <div className="text-center">
          <NikeLogotype className="inline" />
        </div>
        <h3 className="font-bold text-center mb-5">TU CUENTA PARA TODO LO RELACIONADO CON NIKE</h3>
        <label className="block mb-3" htmlFor="">
          <input onChange={handleUsername} onBlur={handleUsername} value={username} placeholder="Direccion de Correo Electronico" className="border border-gray-300 font-light h-8 rounded-sm text-sm  w-full px-2" type="text" />
        </label>
        <label className="block" htmlFor="">
          <input onChange={handlePassword} onBlur={handlePassword} value={password} placeholder="Contraseña" className="border border-gray-300 font-light h-8 rounded-sm text-sm  w-full px-2" type="password" />
        </label>
        <button onClick={handleSignin} className="mt-3 block w-100 bg-gray-900 h-8  text-sm text-white rounded-sm text-center w-full">Iniciar sesión</button>
      </div>
    </div>
  </div>
}

export default Signin;