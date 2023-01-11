import React from 'react'
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div>
            <button
              type="button"
              onClick={() => navigate("/")}
            >
                Home
            </button>
        </div>
        <div>
            <h1>Crypto Exchange</h1>
        </div>
        <div>
            <span>mic</span>
            <span>setting</span>
        </div>
    </div>
  )
}

export default Navbar;