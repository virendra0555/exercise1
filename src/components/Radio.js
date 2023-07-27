import React from "react"

function Radio({ name, label, value, onChange }) {
    return (
        <div className='flex gap-[4px]'>
            <input type='radio' name={name} value={value} id={label} onChange={(e) => onChange(e.target.value)} />
            <label htmlFor={label} className='text-[14px] text-placeholder' > {label}</label>
        </div>
    )
}

export default Radio