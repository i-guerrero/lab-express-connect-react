import { Link } from "react-router-dom"

export default function NavBar() {

  return (
    <div>
      <Link to="/logs">Captain's Log</Link>
      
        <button>
            <Link to="/logs/new">New Log</Link>
        </button>
        
    </div>
  )
}
