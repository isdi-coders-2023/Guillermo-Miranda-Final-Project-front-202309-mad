import { useSelector } from "react-redux"
import { RootState } from "../../../../core/store/store"
import { Menu } from "../menu/menu"
import './header.private.scss'

export function HeaderPrivate (){
  const {loggedUser}=useSelector((state:RootState)=>state.userState)
  return(
    <section className="header">
      <p>FC</p>
      {loggedUser && <h1>Bienvenid@ {loggedUser.userName}</h1>}
      <div><Menu></Menu></div>
    </section>
  )
} 
