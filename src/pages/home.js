import {useState,useEffect,useRef,useMemo,useReducer} from 'react'
import Myref from './myRef'

export default function Home(){
  const [counter,setCounter] = useState(new Date().toLocaleTimeString())
  // const [details,setDetails] = useState({
  //   Name:'',
  //   Address:'',
  //   Comment:'',
  //   Agree:false,
  // })

  const initialState = {
    Name:'',
    Address:'',
    Comment:'',
    Agree:false,
  }

  const reducer = (state=initialState,action)=>{
    switch(action.type){
      case 'updateDetails' :{
        const {value,type,name,checked} = action.payload.target
        console.log("==",value,name,checked,action.payload)
        return {...state, [name]:(type==='checkbox' ? checked :value)}
      }
    }
  }

  const [details,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    const id = setInterval(()=>setCounter(new Date().toLocaleTimeString()),1000)
    console.log("==ref",myRef.current)
    return () => clearInterval(id)
  },
  [])
  const myRef = useRef(null)
  const submitForm = (e)=>{
    e.preventDefault()
    alert("form-submitted")
  }
  // const counter = useMemo(()=>callFunction,[post])
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const updateDetails = (e)=>{
    dispatch({type:'updateDetails',payload:e})
    // const {name,type,value} = e.target
    // console.log("details==",details,e.target)
    //   type==='checkbox'?setDetails({...details,[name]:e.target.checked}):setDetails({...details,[name]:value})
  }

  return(
    <>
    <div className="fs-1 text-success text-center fw-bold mt-5">
      "Welcome to home page"
        {details.Name}-{details.Agree?'true':'false'}
    </div>
    <div className="fs-3 text-danger text-center fw-bold my-5">
      {counter}
    </div>
    <form onSubmit={submitForm} className="w-50 mx-auto container card pb-5">
      <label htmlFor="Name" className="my-2 form-label">
        Name:<input  value ={details.Name} className=" form-control" type="text" name="Name" onChange={updateDetails}  />
      </label>
      <label htmlFor="Address" className="my-2 form-label">
        Address:<input value ={details.Address} className=" form-control" type="text" name="Address" onChange={updateDetails}  />
      </label>
      <label htmlFor="Comment" className="my-2 form-label">
        Comment:<textarea  value ={details.Comment}  rows="3" className=" form-control" type="text" name="Comment" onChange={updateDetails}  />
      </label>
      <label htmlFor="Checked" className="my-2 form-check-label">
        Agree:<input  rows="3" checked={details.Agree} className=" form-check-input" type="checkbox" name="Agree" onChange={updateDetails}  />
      </label>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <Myref ref={myRef}/>
    </>
  )
}