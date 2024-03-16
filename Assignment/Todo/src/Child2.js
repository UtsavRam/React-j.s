import React, { useContext } from 'react'
import { xyz } from './Useconten'

function Child2() {

    const proparty = useContext(xyz)
  return (
    <div>Child2  {proparty/2}</div>
  )
}

export default Child2