import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const initstate = {
  query: "",
  data: []
}


function ApiKey() {
  const [state, setstate] = useState("")

  const handlechange = (e) => {
    console.log(e.target.value)
    setstate({ ...state, query: e.target.value })
  }


 const handleclick= () => {
    
      axios({
        method: "get",
        baseURL: "http://api.weatherapi.com/v1",
        url: "/current.json",
        params: {
          key: "73a304a81e8a426392964533221503",
          q: state.query
        }

      })
        .then(res => setstate({ ...state, data: res.data }))
        .catch(err => { console.log(err) })
 }

    console.log(state)
 

  return (
    <div>
      <h1>it is for the pupose of learning search bar in js</h1>
      <input type="text" value={state.query} onChange={handlechange} />
      <button onClick={handleclick}>search</button>
    </div>
  )
}

export default ApiKey