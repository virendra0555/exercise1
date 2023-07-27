

function FormTitle({step, children}) {
    return (
        <div className='font-medium flex justify-between mb-[24px]'>
            <h1 className='text-[20px]'> {children} </h1>
            <div className='text-[16px]'> {step}  </div>
        </div>
    )
}

export default FormTitle