import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/users.hook';
import { UserStructure } from '../../models/user';
import './register.scss'

export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const data = {
      email: (formElement.elements.namedItem('email') as HTMLInputElement)
        .value,
      passwd: (formElement.elements.namedItem('passwd') as HTMLInputElement)
        .value,
      userName: (formElement.elements.namedItem('userName') as HTMLInputElement).value,
      styleFood: (formElement.elements.namedItem('styleFood') as HTMLInputElement)
        .value,
      descriptionUser: (formElement.elements.namedItem('descriptionUser') as HTMLInputElement)
        .value,
    } as Partial<UserStructure>;
    register(data);
    setHasRegister(true);
    navigate('/');
  };


  return (
    <div className='register'>
      <h2 className='register__title'>Create tu cuenta</h2>
      {!hasRegister && (
        <form
          onSubmit={handleSubmit}
          className="register__form"
          aria-label="form"
        >
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Contraseña  </label>
          <input type="password" name="passwd" required />
          <label>Nombre de usuario  </label>
          <input type="text" name="userName" required />
          <label>Tu estilo de cocina  </label>
          <input type="text" name="styleFood"/>
          <label>Tu descripción  </label>
          <textarea  id="descriptionUser" name="descriptionUser" cols={70} rows={3}></textarea>
          <div className="register__form__buttons">
            <button type="submit">Listo</button>
            <Link to={'/'}>
              <button type="button">Volver</button>
            </Link>
          </div>
        </form>
        )}
    </div>
  );
}
