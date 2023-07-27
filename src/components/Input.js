
function Input({ type, placehoder, value, onChange }) {
    return (
        <input className='w-full text-[14px] leading-[20px] placeholder:text-[#7A7A7A] px-[12px] py-[8px] border border-[#E6E6E6] outline-0 rounded-[5px]' type={type || 'text'} placeholder={placehoder} value={value} onChange={(e) => onChange(e.target.value)}  />
    )
}

export default Input