
import React from 'react'
import { useAppContext } from '../contexts/appContext'
import FormOne from './FormOne'
import FormTwo from './FormTwo'

function CreateJob() {
    const { step } = useAppContext()

    return (
        <div className='fixed inset-0 w-full min-h-[100vh] overflow-auto  flex justify-center items-center bg-gray-400/60'>
            {step === 1 && <FormOne />}
            {step === 2 && <FormTwo />}
        </div>
    )
}

export default CreateJob