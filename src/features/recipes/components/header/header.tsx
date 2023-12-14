import { useSelector } from "react-redux"
import { RootState } from "../../../../core/store/store"

export function Header (){
  const {loggedUser}=useSelector((state:RootState)=>state.userState)
  return(
    <section>
      {loggedUser && <>
      <h1>Bienvenid@ {loggedUser.email}</h1>
      </>}
    </section>
  )
} 
