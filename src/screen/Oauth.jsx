import React, {useState, useEffect} from 'react'

function Oauth(props) {
  const [view, setView] =useState('numview')
  return (
    <div className='oauth flex rel'>
      <h1 className="s18 ">sign in</h1>
      <h1 className="s15 fontn">enter your phone number and we will send one time verification code</h1>
       
    </div>
  )
}

export default Oauth
