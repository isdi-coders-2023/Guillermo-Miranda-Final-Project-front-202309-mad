import { SyntheticEvent, useEffect } from "react";
import { useUsers } from "../../hooks/users.hook"
import { LoginUser } from "../../models/user";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store"

import './login.scss'

export function Login (){

  const { loggedUser }=useSelector((state:RootState)=>state.userState)

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
  };

  useEffect(()=>{
    if(loggedUser){
      navigate('/home');
    }
  }, [loggedUser])

  return(
    <section className="login">
      <div className="login__title">
        <p>Accede a tu cuenta</p>
        <img 
          src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702794561/icon-login_lmywve.png" 
          alt="login-icon" 
          width={50}
          height={50}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        aria-label="form"
      >
        <div className="login__inputs">
          <input className='input' type="email" name="email" placeholder="  email" required />
          <input className='input' type="password" name="passwd" placeholder="  contraseña" required />
        </div>
        <div className="login__buttons">
          <button type="submit">INICIAR SESION</button>
          <Link to={'/register'}>
              <button type="button">REGISTRATE</button>
          </Link>
        </div>
      </form>
  </section>
  )
}
