import React from 'react'
import '../Styles/Todos.css'

const Todos = () => {
  return (
    <div className='Main_top'>
        <h1 className='Hading'>Todos</h1>
        <div className="form">
          <input type="text" />
          <button>Add</button>
        </div>
    </div>
  )
}

export default Todos