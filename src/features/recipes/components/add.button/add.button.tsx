import { Link } from "react-router-dom"
import './add.button.scss'

export const AddButton = () => {
  return(
    <div className="image">
      <Link to={'/form'} data-testid="link">
        <img 
            src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702753986/x7w4zk7wskuzyi9kap8x.png" 
            alt="add-card" 
            width={50}
            height={50}
            role='button'
          />
      </Link>
    </div>
  )
}
