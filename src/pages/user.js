import Photo from './photo'
// import Post from './post'
import {useState,useEffect,createContext,lazy,Suspense} from 'react';
const Post  = lazy(()=> import ('./post'))
 const userContext = createContext()
  const User = () => {
  const [user,setUser] = useState({
      id:'0',
      title:'No-title'
    }
  )
  const selectedUser = (user) => {
    setUser({id:user.id,title:user.title})
  }

    return(
      <>
      <div className="mx-auto container-fluid">
      <h1 className="text-center text-center text-dark my-5">My Details</h1>
      {user.id && <div className="card w-25 h-25 text-danger container">{user.id} - {user.title}</div>}
      <Suspense fallback={ <div>Loadding...</div> }>
          <Post onSelectUser={selectedUser}/>
      </Suspense>
      <userContext.Provider value={user}>
        <Photo />
      </userContext.Provider>
      </div>
      </>
    )
}

export {User,userContext}