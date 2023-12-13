import { SyntheticEvent, useState } from "react";
import { useUsers } from "../../hooks/users.hook"
import { LoginUser } from "../../models/user";
import { Link, useNavigate } from "react-router-dom";

export function Login (){

  const [hasLogged, setHasLogged] = useState(false);
  const {login} = useUsers()
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const loginData: LoginUser = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string
    };
    
    login(loginData);
    setHasLogged(true);
    navigate('/home')

  };

  return(
    <section>
    {!hasLogged && (
      <form
        onSubmit={handleSubmit}
        className="register-form"
        aria-label="form"
      >
        <label>Email: </label>
        <input type="email" name="email" placeholder="email" required />
        <label>Contraseña: </label>
        <input type="password" name="passwd" placeholder="contraseña" required />
        <button type="submit">listo</button>
          
        {hasLogged && (
        <Link to={'/home/'}>
          <button type="button">vamos a tu espacio</button>
        </Link> 
        )}
      </form>
    )}
  </section>
  )
}
