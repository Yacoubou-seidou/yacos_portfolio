import { useState } from 'react'
const MobileMenu = () => {
  const [open, setopen] = useState(false)
  return (
    <div className={open ? "menu-toggle open" : "menu-toggle"} onClick={() => setopen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MobileMenu
