import { useState } from 'react';
import './menu.scss'
import { Link } from 'react-router-dom';


export function Menu() {
  
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
        />
      </i>
      {isClicked === true && (
        <div className='options'>
          <ul>
            <li>
              <Link to="/home">
                <button className='home'>· H O M E ·</button>
              </Link>
            </li>
            <li>
              <Link to="/myrecipes" >
              <button className='recipes'>· R E C E T A R I O ·</button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
