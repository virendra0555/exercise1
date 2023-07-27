import axios from 'axios'
import { BASE_URL } from './constant'

export const postJob = async (data) => {
    try {
        const result = axios.post(`${BASE_URL}`, data)
        return result;
    }
    catch (err) {
        return err;
    }
}

export const updateJob = async (data, id) => {
    try {
        const result = axios.put(`${BASE_URL}/${id}`, data)
        return result;
    }
    catch (err) {
        return err;
    }
}

export const deleteJob = async (id) => {
    try {
        const result = axios.delete(`${BASE_URL}/${id}`)
        return result;
    }
    catch (err) {
        return err;
    }
}


export const getJobs = async (data) => {
    try {
        const result = axios.get(`${BASE_URL}`)
        return result;
    }
    catch (err) {
        return err;
    }
}

