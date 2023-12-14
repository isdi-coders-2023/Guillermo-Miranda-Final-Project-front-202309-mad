import { SyntheticEvent, useEffect } from "react";
import { useUsers } from "../../hooks/users.hook"
import { LoginUser } from "../../models/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store"

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
    <section>
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
          
      </form>
  </section>
  )
}
