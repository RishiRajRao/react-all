import {forwardRef} from 'react'
function myRef (props,myRef){
  return(
    <div className="container mx-auto">
       <input className="form-control" type="text" value="rishi-ref" ref={myRef}/>
    </div>
  )
}

export default forwardRef(myRef)

