import { useState } from 'react';

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
        width={100}
        height={100}
        role='button'
        onClick={handleOptions}
        />
      </i>
      {isClicked === true && (
      <ul>
        <li>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/myrecipes" >
          <button>Recetario</button>
          </Link>
        </li>
      </ul>
      )}
    </>
  );
}
