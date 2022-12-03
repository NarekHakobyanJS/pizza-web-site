import React from 'react'
import "./Button.scss"
import classNames from "classnames"

function Button({children, buttonCart}) {

    return (
        <button 
        
        className={classNames('button', {
            'button-cart' : buttonCart
        })}>
            {children}
        </button>
    )
}

export default Button 