import {Component,useState} from 'react';
// import {mapStateToProps,mapDispatchToProps} from 'redux'
import {connect} from 'react-redux'
import {getUsers} from './actions/userActions'
import Photo from './pages/photo'
import Post from './pages/post'
import Home from './pages/home'
import Header from './pages/header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {User} from './pages/user';

function App(){
  const [count,setCount] = useState(0)
 return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/photos" element={<Photo/>} />
          <Route path="/post" element={<Post/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
    </Router>
    </>
 )
}

const mapStateToProps = (state)=>{
  console.log("mapStateProps==",state)
  return state
}
export default connect(mapStateToProps, {getUsers})(App)
// export default App;