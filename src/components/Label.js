
function Label({ children, required }) {
  return (
    <label htmlFor="" className='text-[14px] font-medium'>
      {children}
      {required && <span className='text-red-500'> * </span>}
    </label>
  )
}

export default Label