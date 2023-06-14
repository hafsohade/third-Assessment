import React from 'react'

const UserOutput = (props) => {
  return (
    <div className='container'>
        <h3>My name is {props.username}</h3>
    </div>
  )
}

export default UserOutput;