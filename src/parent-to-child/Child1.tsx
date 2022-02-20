import React from 'react'

export const Child1 = (props:{
 data:string,
}) => {
  return (
    <div>
        <h1>Child - 1</h1>
        <p>{props.data}</p>
    </div>
  )
}
