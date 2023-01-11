import React from 'react'
import UserResults from '../users/UserResults'
import UserSearch from '../users/UserSearch'

function Home() {
  return (
    <div className='m-4'>
    <UserSearch/>
    <UserResults/>
    </div>
  )
}

export default Home