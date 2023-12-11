import { Login } from "../login/login"
import { Link } from "react-router-dom"

export function SessionButtons (){
  
  return(
    <section>
      
      <Login></Login>
      <div>
          <Link to={'/register'}>
            <button type="button">Regístrate</button>
          </Link>
      </div>
      
    </section>
  )
}
