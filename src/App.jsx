import React, { Component } from 'react'
import UserStore from './UserStore'
import Home from './Home'
const App = () => {
  const store = new UserStore();
  return (
    <div>
      <Home store={store}/>
    </div>
  )
}

export default App