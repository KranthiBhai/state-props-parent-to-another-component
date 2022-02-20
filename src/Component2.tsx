import React from 'react'

type Component2Props = {
    data: string,
}
export const Component2 = (props:Component2Props) => {
  return (
    <div>
        <h2>Component 2</h2>
        <p>{props.data}</p>
    </div>
  )
}
