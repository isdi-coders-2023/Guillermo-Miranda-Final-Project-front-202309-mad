

import { Login } from '../../features/users/components/login/login';
import { HeaderSession } from '../../features/users/components/header.session/header.session';


export default function SessionPage() {
  return (
    <>
      <section>
      <HeaderSession></HeaderSession>
      <Login></Login>    
    </section>
    </>
  );
}
