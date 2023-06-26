import React from 'react'

function Header() {
  return (
    <header style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    <div>My Todo List</div>
    <div style={{ textAlign: "end" }}>React</div>
  </header>   
  )
}

export default Header