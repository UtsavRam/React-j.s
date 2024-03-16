import React, { useContext } from 'react'
import { xyz } from './Useconten'

function Child1() {

    const proparty = useContext(xyz)
  return (
    <div>Child1  {proparty/2}</div>
  )
}

export default Child1