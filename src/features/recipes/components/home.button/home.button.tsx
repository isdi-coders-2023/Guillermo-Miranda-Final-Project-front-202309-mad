import { Link } from "react-router-dom"
import './home.button.scss'

export const HomeButton = () => {
  return(
    <div className="image" data-testid="link">
      <Link to={'/home'}>
        <img 
            src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702923351/home-button_mqujyu.png" 
            alt="home-button" 
            width={80}
            height={80}
          />
      </Link>
    </div>
  )
}
