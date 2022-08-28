import React from 'react'  //type rfce
                //  keyword
function Random(props) { 
  return (
    <div>

    {/* to receive one way communication props keyword is used---using props calling item */}
      my name is {props.item}   
      <p>lastname is {props.lname}</p>
    </div>
  )
}

export default Random