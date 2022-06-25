import {Component} from 'react';
// import {mapStateToProps,mapDispatchToProps} from 'redux'
import {connect} from 'react-redux'
import {getUsers} from './actions/userActions'

class App extends Component {
  componentDidMount(){
  // const {users,getUsers} = this.props
    console.log("mounted==",this.props)
    this.props.getUsers()
  }
  render(){
    console.log("render==",this.props)
  const {userReducer:{users}} = this.props
  const list = users && users.map(user=>{
    return (<li key={user.id}>{user.id}</li>)
  })
  if(!users) return null;
    return(
      <>
      <ul>{list}</ul>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log("mapStateProps==",state)
  return state
}

// const mapDispatchToProps = (dispatch)=>{
//  getUsers:() => dispatch(getUsers())
// }

export default connect(mapStateToProps, {getUsers})(App)
// export default App;