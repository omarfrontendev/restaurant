import React, { useEffect, useState } from 'react'

import './button.css'

const Button = ({ children, type, onClic, disabled }) => {

  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(blur) {
        setBlur(false)
      }
      return () => {
        if(timer == 3) {
          timer(clearTimeout)
        }
      }
    }, 300);

  }, [blur])

  return (
    <button
      className={`button relative ${blur ? 'blur' : ''}`}
      type={type || 'button'}
      onMouseLeave={() => setBlur(true)}
      onClick={onClic}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  )
}

export default Button