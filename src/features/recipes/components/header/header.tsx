import { useSelector } from "react-redux"
import { RootState } from "../../../../core/store/store"
import { Menu } from "../menu/menu"
import './header.scss'

export function Header (){
  const {loggedUser}=useSelector((state:RootState)=>state.userState)
  return(
    <section className="header">
      <p role="heading">FC</p>
      {loggedUser && <h1>Bienvenid@ {loggedUser.userName}</h1>}
      <div><Menu></Menu></div>
    </section>
  )
} 
