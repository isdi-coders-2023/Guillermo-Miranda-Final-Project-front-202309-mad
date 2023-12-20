import { useState } from 'react';
import './menu.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../core/store/store';


export function Menu() {
  
  const { loggedUser }=useSelector((state:RootState)=>state.userState)
  const [isClicked, setIsClicked] = useState(false)
  const handleOptions = () =>{
    setIsClicked(!isClicked)
  }

  return (
    <>
      <i role="i">
        <img 
        src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702633040/fuzdw3cmbhsufwcvvuaj.png" 
        alt="image menu hamburguer" 
        width={50}
        height={50}
        role='button'
        onClick={handleOptions}
        data-testid="link"
        />
      </i>
      {isClicked === true && (
        <div className='options'>
          <ul>
            <li>
              <Link to="/home" >
                <button className='home'>· H O M E ·</button>
              </Link>
            </li>
            {loggedUser && (
            <li>
              <Link to="/myrecipes" >
              <button className='recipes'>· R E C E T A R I O ·</button>
              </Link>
            </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
