import React from 'react'
import { observer } from 'mobx-react-lite'
const Home = ({store}) => {

  const changeName=()=>{
    store.updateUser('code Improve')
  }

  const addSubject=()=>{
    store.addSubject('History')
  }
  return (
    <div>Mobx
    <div>
    <h1>{store.userInfo.name} - {store.userInfo.id}</h1>
    <button onClick={changeName}>Change Name</button>
    <button onClick={addSubject}>Add Subject</button>
    {
      store.userInfo.subject.map((item,index)=> <p key={index}>{item}</p>)
    }
    </div>
    </div>
  )
}

export default observer(Home)