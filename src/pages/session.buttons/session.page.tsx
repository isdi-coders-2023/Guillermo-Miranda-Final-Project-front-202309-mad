
import { Link } from 'react-router-dom';
import { Login } from '../../features/users/components/login/login';
import { HeaderSession } from '../../features/users/components/header.session/header.session';


export default function SessionPage() {
  return (
    <>
      <section>
      <HeaderSession></HeaderSession>
      <Login></Login>
      <div>
          <Link to={'/register'}>
            <button type="button">Regístrate</button>
          </Link>
      </div>
      
    </section>
    </>
  );
}
