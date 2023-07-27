
const initialFormData = {
    // step 1
    title: '',
    company: '',
    industry: '',
    remoteType: '',
    location: '',
    // step 2
    experienceMin: '',
    experienceMax: '',
    salaryMin: '',
    salaryMax: '',
    totalEmployees: '',
    applyType: '',
}


export default function reducer(state, action) {
    const { type, payload } = action

    if (type === 'SET_JOBS') {
        return { ...state, jobs: payload, }
    }

    if (type === 'ADD_JOB') {
        return { ...state, data: initialFormData, isPopup: false, step: 0, jobs: payload }
    }
    if (type === 'DELETE_JOB') {
        return { ...state, jobs: payload }
    }


    if (type === 'CREATING_JOB') {
        return { ...state, isPopup: true, step: 1, data: initialFormData }
    }


    if (type === 'SET_DATA') {
        return { ...state, data: payload }
    }
    if (type === 'SET_STEP') {
        return { ...state, step: payload }
    }


    if (type === 'ENABLE_JOB_EDIT') {
        return { ...state, data: state.jobs[payload], isPopup: true, step: 1, isEditing: true }
    }
    if (type === 'EDIT_JOB') {
        return { ...state, jobs: payload, data: initialFormData, isPopup: false, step: 0, isEditing: false }
    }
    if (type === 'DELETE_JOB') {
        return { ...state, jobs: payload }
    }

    if (type === 'CLOSE_POPUP') {
        return { ...state, data: initialFormData, isPopup: false, step: 0, isEditing: false }
    }

    return state;

}


