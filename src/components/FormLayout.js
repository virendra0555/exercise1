import { useRef } from 'react'
import useOutsideClick from '../hooks/useOutsideClick'
import { useAppContext } from '../contexts/appContext'

function FormLayout({ children, title, step }) {
    const { dispatch } = useAppContext()
    const ref = useRef()

    useOutsideClick(ref, () => {
        dispatch({ type: 'CLOSE_POPUP' })
    })

    return (
        <div className='p-[32px] w-[550px] border border-[#E6E6E6] rounded-[10px] bg-card shadow' ref={ref}>
            <div className='font-medium flex justify-between mb-[24px]'>
                <h1 className='text-[20px]'> {title} </h1>
                <div className='text-[16px]'> Step {step}  </div>
            </div>
            {children}
        </div>
    )
}

export default FormLayout