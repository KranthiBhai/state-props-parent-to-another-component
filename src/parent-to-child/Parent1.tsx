import React from 'react'
import { Child1 } from './Child1';

export const Parent1 = () => {
    const data = "Hello Kranhti Bhai";
  return (
    <div>
        <Child1 data={data} />
    </div>
  )
}
