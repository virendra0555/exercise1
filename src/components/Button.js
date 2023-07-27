

import React from 'react'

function Button({ children, type, onClick }) {
    let style = ''
    if (type === 'primary') {
        style = 'text-white bg-primary'
    }
    else if (type === 'danger') {
        style = 'text-white bg-error'
    }
    else if (type === 'warning') {
        style = 'text-white bg-orange-400'
    }
    else if (type === 'outline') {
        style = 'text-primary bg-transparent border border-primary'
    }

    return (
        <button className={`flex items-center gap-1 text-[16px] leading-[24px] px-[16px] py-[8px] rounded-[6px] ${style}`} onClick={onClick}> {children} </button>
    )
}

export default Button