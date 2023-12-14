import { useSelector } from "react-redux"
import { RootState } from "../../../../core/store/store"
import { Menu } from "../menu/menu"

export function Header (){
  const {loggedUser}=useSelector((state:RootState)=>state.userState)
  return(
    <section>
      {loggedUser && 
        <>
          <h1>Bienvenid@ {loggedUser.userName}</h1>
        </>
      }
      <Menu></Menu>
    </section>
  )
} 
