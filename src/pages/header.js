import {Link} from 'react-router-dom'

export default function Header(){
  return (
    <>
      <header className="mx-auto container row justify-content-between">
      <Link to="/" className="col-3">
           home
      </Link>
      <Link to="/photos" className="col-3">
          See photos
      </Link>
      <Link to="/post" className="col-3">
        See post
      </Link>
      <Link to="/user" className="col-3">
        See User-details
      </Link>
      </header>
    </>
  )
}